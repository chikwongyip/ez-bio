<template>
    <section>
        <div class="row justify-content-center mb-3"
            v-for="item in productList"
            :key="item.product_id">
            <div class="col-md-12">
            <div class="card shadow-0 border rounded-3">
                <div class="card-body">
                <div class="row g-0">
                    <div class="col-xl-3 col-md-4 d-flex justify-content-center">
                    <div class="bg-image hover-zoom ripple rounded ripple-surface me-md-3 mb-3 mb-md-0">
                        <img :src="item.product_pic" class="w-100" />
                        <a href="#!">
                        <div class="hover-overlay">
                            <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                        </div>
                        </a>
                    </div>
                    </div>
                    <div class="col-xl-6 col-md-5 col-sm-7">
                    <h5>{{ item.product_name }}</h5>
                    <div class="d-flex flex-row">
                        <div class="text-warning mb-1 me-2">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <span class="ms-1">
                            品牌名称:
                        </span>
                        </div>
                        <span class="text-muted">{{ item.brand_name }}</span>
                    </div>

                    <p class="text mb-4 mb-md-0">
                       {{ item.product_desc }}
                    </p>
                    </div>
                    <div class="col-xl-3 col-md-3 col-sm-5">
                    <div class="mt-4">
                        <button class="btn btn-primary" type="button">点击浏览</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>  
</template>
<script>
    import { getProduct } from '@/api';
    export default{
      name:"ProductList",
      data(){
        return{
            productList:[],
            perPage:10,
            currentPage:1,

        }
      },
      mounted(){
        getProduct().then( res => {
            this.productList = res.data.product
            this.productList.forEach( item => {
                item.product_pic = process.env.VUE_APP_IMAGE + item.product_pic
            })
        })
      },
      computed:{
        rows(){
            return this.productList.length
        }
      }
  }
</script>
<style scoped>
</style>