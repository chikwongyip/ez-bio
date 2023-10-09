<template>
    <b-container>
        <b-row>
          <b-col>1 of 3</b-col>
          <b-col>2 of 3</b-col>
          <b-col>3 of 3</b-col>
        </b-row> 
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
          category:[]
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
      }
  }
</script>
<style scoped>
</style>