<template>
  <footer class="text-left text-lg-start text-muted mt-3">
    <!-- Section: Links  -->
    <section>
      <div class="container text-left text-md-start pt-3 pb-4">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-12 col-lg-3 col-sm-12 mb-2">
            <router-link :to="{ name: 'index' }">
              {{ company.name }}
            </router-link>
            <!-- Content -->
            <p class="mt-2 text-blue">© 2023 Copyright: {{ company.name }}</p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-6 col-sm-4 col-lg-3">
            <!-- Links -->
            <h6 class="text-uppercase text-blue fw-bold mb-2">备案编号</h6>
            <ul class="list-unstyled mb-4">
              <li>
                <a
                  class="text-blue-50"
                  href="https://ythzxfw.miit.gov.cn/index"
                  >{{ company.icp }}</a
                >
              </li>
            </ul>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-6 col-sm-4 col-lg-2">
            <!-- Links -->
            <h6 class="text-uppercase text-blue fw-bold mb-2">企业信息</h6>
            <ul class="list-unstyled mb-4">
              我们的品牌
              <li v-for="item in brands" :key="item.brand_id">
                <router-link
                  :to="{
                    name: 'productBrand',
                    params: { brand_id: item.brand_id }
                  }"
                >
                  {{ item.brand_name }}
                </router-link>
              </li>
            </ul>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-6 col-sm-4 col-lg-2">
            <!-- Links -->
            <h6 class="text-uppercase text-blue fw-bold mb-2">支持</h6>
            <ul class="list-unstyled mb-4">
              <li>
                <router-link
                  :to="{
                    name: 'document'
                  }"
                >
                  技术文档
                </router-link>
              </li>
            </ul>
          </div>

          <div class="col-6 col-sm-4 col-lg-2">
            <!-- Links -->
            <h6 class="text-uppercase text-blue fw-bold mb-2">
              <router-link
                :to="{
                  name: 'aboutUs'
                }"
              >
                关于我们
              </router-link>
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
import { companyInfo, getBrand } from "@/api";
export default {
  name: "IndexFooter",
  data() {
    return {
      company: {},
      brands: []
    };
  },
  methods: {
    getData() {
      companyInfo().then((res) => {
        this.company = res.data[0];
        this.company.logo = process.env.VUE_APP_IMAGE + this.company.logo;
      });
      getBrand().then((res) => {
        this.brands = res.data;
      });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
<style scoped>
a {
  color: black;
}
</style>
