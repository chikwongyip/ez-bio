<template>
    <footer class="text-left text-lg-start text-muted mt-3">
        <!-- Section: Links  -->
        <section>
          <div class="container text-left text-md-start pt-3 pb-4">
            <!-- Grid row -->
            <div class="row mt-3">
              <!-- Grid column -->
              <div class="col-12 col-lg-3 col-sm-12 mb-2">
                <router-link :to="{name:'index'}">
                  {{ company.name }}
                </router-link>
                <!-- Content -->
                <p class="mt-2 text-blue">
                  © 2023 Copyright: {{ company.name }}
                </p>
              </div>
              <!-- Grid column -->
      
              <!-- Grid column -->
              <div class="col-6 col-sm-4 col-lg-3">
                <!-- Links -->
                <h6 class="text-uppercase text-blue fw-bold mb-2">
                  备案编号
                </h6>
                <ul class="list-unstyled mb-4">
                  <li><a class="text-blue-50" href="#">{{ company.icp }}</a></li>
                </ul>
              </div>
              <!-- Grid column -->
      
              <!-- Grid column -->
              <div class="col-6 col-sm-4 col-lg-2">
                <!-- Links -->
                <h6 class="text-uppercase text-blue fw-bold mb-2">
                  企业信息
                </h6>
                <ul class="list-unstyled mb-4">
                  <li><a class="text-blue-50" href="#">我们的品牌</a></li>
                  <li><a class="text-blue-50" href="#">产品类型</a></li>
                </ul>
              </div>
              <!-- Grid column -->
      
              <!-- Grid column -->
              <div class="col-6 col-sm-4 col-lg-2">
                <!-- Links -->
                <h6 class="text-uppercase text-blue fw-bold mb-2">
                  支持
                </h6>
                <ul class="list-unstyled mb-4">
                  <li><a class="text-blue-50" href="#">技术文档</a></li>
                </ul>
              </div>

              <div class="col-6 col-sm-4 col-lg-2">
                <!-- Links -->
                <h6 class="text-uppercase text-blue fw-bold mb-2">
                  关于我们
                </h6>
              </div>
            </div>
            <!-- Grid row -->
          </div>
        </section>
        <!-- Section: Links  -->
      </footer>
</template>
<script>
  import { companyInfo } from '@/api';
  export default{
      name:"IndexFooter",
      data(){
        return{
          company:{}
        }
      },
      methods:{
        getData(){
          companyInfo().then(res => {
            this.company = res.data[0]
            this.company.logo = process.env.VUE_APP_IMAGE + this.company.logo
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