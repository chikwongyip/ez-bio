<template>
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
</template>

<script>
  import { getActiveImage } from '@/api'
  export default{
    data(){
        return{
          images:[],
          slide:0,
          sliding:null
        }
    },
    methods:{
        onSlideStart(){
            this.sliding = true
        },
        onSlideEnd(){
            this.sliding = false
        },
    },
    mounted(){
      getActiveImage().then( res => {
        this.images = res.data.map( item => {
          item.product_pic = process.env.VUE_APP_IMAGE + item.product_pic
          return item
        })
      })
    }
  }
</script>

<style scoped>

</style>