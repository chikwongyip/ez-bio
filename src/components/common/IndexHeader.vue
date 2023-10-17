<template>
    <b-container>
        <b-row>
          <b-col cols="2">
            <div>
              <router-link :to="{name:'index'}">
                <b-img :src="company.logo" fluid alt="没有找到图片"></b-img> 
              </router-link>
            </div>
          </b-col>
          <b-col cols="8">
            <div>
              <b-input-group>
                <b-form-select v-model="selected" 
                :options="options" 
                value-field="item" 
                text-field="name"
                class="w-10 p-1"
                > 
                </b-form-select> 
                <b-form-input aria-label="Input" class="w-50 p-3" v-model="inputText"></b-form-input>
                <b-button variant="outline-primary" @click="submitSearch">搜索</b-button>
              </b-input-group>
            </div>
          </b-col>
          <b-col>
            <div>
              <p class="h5 mb-2">
                <b-icon icon="telephone-fill"></b-icon> {{ company.tel }}
              </p>
            </div>
          </b-col>
        </b-row>
        <div class="mt-4"></div> 
        <b-row>
          <b-col>  
            <div>
              <b-nav tabs fill>
                <b-nav-item-dropdown text="品牌">
                  <b-dropdown-item v-for="(item) in brand" 
                                   :key="item.brand_id"
                                   >
                    <router-link :to="{name:'productBrand',params:{brand_id:item.brand_id}}">
                      {{ item.brand_name }}
                    </router-link>
                  </b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown text="类型">
                  <b-dropdown-item v-for="(item) in category"
                                   :key="item.category_id"
                                   >
                    <router-link :to="{name:'productCategory',params:{category_id:item.category_id}}">
                      {{ item.category_name }}
                    </router-link>
                  </b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item>技术文档</b-nav-item>
                <b-nav-item>关于我们</b-nav-item>
              </b-nav>
            </div>
          </b-col>   
        </b-row>
        <div class="mt-4"></div> 
      </b-container>
</template>
<script>
  import { companyInfo,getBrand, getCategory  } from '../../api/index'
  export default{
      name:"IndexHeader",
      data(){
        return{
          company:{},
          brand:[],
          category:[],
          selected:'1',
          options:[
            { item:'1', name:"品牌"},
            { item:'2', name:"类别"},
            { item:'3', name:"名称"},
          ],
          inputText:""
        }
      },
      methods:{
        getData(){
          companyInfo().then( res => {
            this.company = res.data[0]
            this.company.logo = process.env.VUE_APP_IMAGE + this.company.logo
          })
          getBrand().then(res =>{
            this.brand = res.data
          })
          getCategory().then(res => {
            this.category = res.data
          })
        },
        submitSearch(){
          this.$router.push({name:"productSearch",params:{
            item:this.selected,
            textSearch:this.inputText
          }}).catch(()=>{})
        }
      },
      mounted(){
        this.getData()
      }
  }
</script>
<style scoped>
</style>