<template>
    <div class="container text-center">
      <h1>我们的品牌</h1>
      <div class="mt-3"></div>
      <b-card-group>
        <div v-for="item in brands" :key="item.brand_id">
            <b-card no-body class="overflow-hidden" style="max-width: 150px;" footer="Card Footer"
                    footer-tag="footer">
              <b-row no-gutters>
                  <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
              </b-row>
            </b-card>
          </div>
      </b-card-group>
    </div>
</template>
<script>
  import { getBrand } from '@/api';
    export default{
      name:"IndexBrand",
      data(){
        return{
          brands:[]
        }
      },
      methods:{
        getData(){
          getBrand().then(res => {
            this.brands = res.data
          })
        }
      },
      mounted() {
        this.getData()
      },   
    }
</script>
<style scoped>
</style>