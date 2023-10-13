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
                Quality Men's Hoodie for Winter, Men's Fashion <br />
                Casual Hoodie
            </h4>
            <div class="d-flex flex-row my-3">
                <div class="text-warning mb-1 me-2">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <span class="ms-1">
                    4.5
                </span>
                </div>
                <span class="text-muted"><i class="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
                <span class="text-success ms-2">In stock</span>
            </div>

            <div class="mb-3">
                <span class="h5">$75.00</span>
                <span class="text-muted">/per box</span>
            </div>

            <p>
                Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for
                men.
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
    export default{
        name:"ProductDetails",
        data(){
            return{
                product:{},
                images:[]
            }
        }
    }
</script>
<style scoped>
</style>