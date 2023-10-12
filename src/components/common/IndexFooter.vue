<template>
    <!-- <div class="container">
        <b-row>
            <b-col>
                <div>
                    <p class="h2 mb-2">
                        <b-icon icon="hand-thumbs-up"></b-icon> 专业的售后团队
                    </p>
                </div>
            </b-col>
            <b-col>
                <div>
                    <p class="h2 mb-2">
                        <b-icon icon="truck"></b-icon> 优质物流配送
                    </p>
                </div>
            </b-col>
            <b-col> 
                <div>
                    <p class="h2 mb-2">
                        <b-icon icon="telephone"></b-icon> 欢迎询价
                    </p>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <div>
                    <p>
                        Copyright © 2014 ez-Bio Inc. - All rights reserved.
                    </p>
                </div>
            </b-col>
        </b-row>
    </div> -->
    <footer class="text-center text-lg-start text-muted mt-3">
        <!-- Section: Links  -->
        <section class="">
          <div class="container text-center text-md-start pt-4 pb-4">
            <!-- Grid row -->
            <div class="row mt-3">
              <!-- Grid column -->
              <div class="col-12 col-lg-3 col-sm-12 mb-2">
                <!-- Content -->
                <a href="https://mdbootstrap.com/" target="_blank" class="text-blue h2">
                  {{ company.name }}
                </a>
                <p class="mt-1 text-blue">
                  © 2023 Copyright: MDBootstrap.com
                </p>
              </div>
              <!-- Grid column -->
      
              <!-- Grid column -->
              <div class="col-6 col-sm-4 col-lg-3">
                <!-- Links -->
                <h6 class="text-uppercase text-blue fw-bold mb-2">
                  Store
                </h6>
                <ul class="list-unstyled mb-4">
                  <li><a class="text-blue-50" href="#">关于我们</a></li>
                </ul>
              </div>
              <!-- Grid column -->
      
              <!-- Grid column -->
              <div class="col-6 col-sm-4 col-lg-3">
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
              <div class="col-6 col-sm-4 col-lg-3">
                <!-- Links -->
                <h6 class="text-uppercase text-blue fw-bold mb-2">
                  支持
                </h6>
                <ul class="list-unstyled mb-4">
                  <li><a class="text-blue-50" href="#">技术文档</a></li>
                </ul>
              </div>
              <!-- Grid column -->
      
              <!-- Grid column -->
       
              <!-- Grid column -->
            </div>
            <!-- Grid row -->
          </div>
        </section>
        <!-- Section: Links  -->
      </footer>
</template>
<script>

  export default{
      name:"IndexFooter",
      props:{
          company:{}
      }
      
  }
</script>
<style scoped>
</style>