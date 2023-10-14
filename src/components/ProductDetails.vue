<template>
    <section class="py-5">
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
                {{ product.product }}
            </h4>
            <p>
                {{ product.product_desc }}
            </p>

            <div class="row">
                <dt class="col-3">Type:</dt>
                <dd class="col-9">Regular</dd>

                <dt class="col-3">Color</dt>
                <dd class="col-9">Brown</dd>

                <dt class="col-3">Material</dt>
                <dd class="col-9">Cotton, Jeans</dd>

                <dt class="col-3">Brand</dt>
                <dd class="col-9">Reebook</dd>
            </div>

            <hr />
            </div>
        </main>
        </div>
    </div>
    </section>
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
            let params = { product_id:this.route.query.product_id }
            getProduct(params).then(res => {
                this.product = res.data.product[0]
                this.images = res.data.images
                this.images.forEach(item => {
                    item.product_pic = process.env.VUE_APP_IMAGE + item.product_pic
                })
            })
        }
    }
</script>
<style scoped>
</style>