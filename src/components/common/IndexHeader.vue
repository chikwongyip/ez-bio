<template>
    <b-container>
        <b-row>
          <b-col>
            <div>
              <b-img :src="company.logo" fluid alt="没有找到图片">

              </b-img> 
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
                <b-form-input aria-label="Input" class="w-50 p-3"></b-form-input>
                <b-button variant="outline-primary">搜索</b-button>
              </b-input-group>
            </div>
          </b-col>
          <b-col>
            <div>
              <p class="h5 mb-2">
                <b-icon icon="telephone-fill"></b-icon> 123213213
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
                  <b-dropdown-item href="#">EN</b-dropdown-item>
                  <b-dropdown-item href="#">ES</b-dropdown-item>
                  <b-dropdown-item href="#">RU</b-dropdown-item>
                  <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown text="类型">
                  <b-dropdown-item href="#">EN</b-dropdown-item>
                  <b-dropdown-item href="#">ES</b-dropdown-item>
                  <b-dropdown-item href="#">RU</b-dropdown-item>
                  <b-dropdown-item href="#">FA</b-dropdown-item>
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
          ]
        }
      },
      methods:{
        getData(){
          companyInfo().then( res => {
            this.company = res.data[0]
            this.company.logo = process.env.VUE_APP_IMAGE + this.company.logo
          })
          getBrand().then(res =>{
            this.brand = res.data.map( item => {
              item.brand_image = process.env.VUE_APP_IMAGE + item.brand_image
            })
          })
          getCategory().then(res => {
            this.category = res.data
          })
        }
      },
      mounted(){
        this.getData()
      }
  }
</script>
<style scoped>
</style>