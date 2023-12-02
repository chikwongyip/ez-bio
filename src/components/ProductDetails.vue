<template>
    <div class="container">
        <div class="row gx-5">
        <aside class="col-lg-6">
            <div class="border rounded-4 mb-3 d-flex justify-content-center">
            </div>
            <div>
                <b-carousel id="carousel-1" 
                            v-model="slide" 
                            :interval="4000" controls indicators 
                            background="#ababab" 
                            img-width="1024" 
                            img-height="480" 
                            style="text-shadow: 1px 1px 2px #333;" 
                            @sliding-start="onSlideStart" 
                            @sliding-end="onSlideEnd">    
                    <!-- Slides with custom text -->
                    <b-carousel-slide v-for="item in images"
                                      :key="item.pic_id"
                                      :img-src="item.product_pic">
                        <h1>{{ item.product_name }}</h1>
                    </b-carousel-slide>    
                </b-carousel>
           </div>
        </aside>
        <main class="col-lg-6">
            <div class="ps-lg-3">
            <h4 class="title text-dark">
                {{ product.product_name }}
            </h4>
            <div class="row">
                <dt class="col-3">产品规格</dt>
                <dd class="col-9">{{ product.product_standard }}</dd>

                <dt class="col-3">产品型号</dt>
                <dd class="col-9">{{ product.product_model }}</dd>
            </div>
            <hr />
            <div class="text-left">
                <h5>产品描述</h5>
            <p>
                <pre id="desc">
                    {{ product.product_desc }}
                </pre>
            </p>
            </div>
            </div>
        </main>
        </div>
    </div>
    
</template>
<script>
    import { getProduct } from '@/api';
    export default{
        name:"ProductDetails",
        data(){
            return{
                product:{},
                images:[]
            }
        },
        mounted(){
            let params = {}
            if(this.$route.params.product_id){
                params["product_id"] = this.$route.params.product_id
            }
            getProduct(params).then(res => {
                this.product = res.data.product[0]
                this.images = res.data.images.filter(item => {
                    if(item.product_id == this.product.product_id){
                        return item
                    }
                })
                this.images.forEach(item => {
                    item.product_pic = process.env.VUE_APP_IMAGE + item.product_pic
                })
            })
        },
        watch:{
        '$route':function(){
            window.location.reload()
        }
      }
    }
</script>
<style scoped>
#desc{
    white-space: pre-wrap;
  }
</style>