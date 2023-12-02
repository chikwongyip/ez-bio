<template>
  <div class="container">
    <div
      class="row justify-content-center mb-3"
      v-for="item in productList"
      :key="item.product_id"
    >
      <div class="col-md-12">
        <div class="card shadow-0 border rounded-3">
          <div class="card-body">
            <div class="row g-0">
              <div class="col-xl-3 col-md-4 d-flex justify-content-center">
                <div
                  class="bg-image hover-zoom ripple rounded ripple-surface me-md-3 mb-3 mb-md-0"
                >
                  <img :src="item.product_pic" class="w-100" />
                  <a href="#!">
                    <div class="hover-overlay">
                      <div
                        class="mask"
                        style="background-color: rgba(253, 253, 253, 0.15)"
                      ></div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-xl-6 col-md-5 col-sm-7">
                <h5>{{ item.product_name }}</h5>

                <div class="d-flex flex-row">
                  <div class="text-warning mb-1 me-2">
                    <span class="ms-1"> 品牌名称: </span>
                  </div>
                  <span class="text-muted">{{ item.brand_name }}</span>
                </div>

                <div class="d-flex flex-row">
                  <div class="text-warning mb-1 me-2">
                    <span class="ms-1"> 产品类型: </span>
                  </div>
                  <span class="text-muted">{{ item.category_name }}</span>
                </div>

                <div class="d-flex flex-row">
                  <div class="text-warning mb-1 me-2">
                    <span class="ms-1"> 型号: </span>
                  </div>
                  <span class="text-muted">{{ item.product_model }}</span>
                </div>

                <div class="d-flex flex-row">
                  <div class="text-warning mb-1 me-2">
                    <span class="ms-1"> 规格: </span>
                  </div>
                  <span class="text-muted">{{ item.product_standard }}</span>
                </div>
              </div>
              <div class="col-xl-3 col-md-3 col-sm-5">
                <div class="mt-4">
                  <button
                    class="btn btn-primary"
                    type="button"
                    @click="ViewDetails(item.product_id)"
                  >
                    点击浏览
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getProduct } from "@/api";
export default {
  name: "ProductList",
  data() {
    return {
      data: [],
      perPage: 10,
      currentPage: 1
    };
  },
  methods: {
    productSearch(item, searchText, data) {
      let result = [];
      const regExp = new RegExp(searchText, "g");
      if (item === "1") {
        result = data.filter((item) => {
          return regExp.test(item.brand_name);
        });
      }

      if (item === "2") {
        result = data.filter((item) => {
          return regExp.test(item.category_name);
        });
      }
      if (item === "3") {
        result = data.filter((item) => {
          return regExp.test(item.product_name);
        });
      }
      return result;
    },
    ViewDetails(product_id) {
      this.$router.push({
        name: "productDetails",
        params: { product_id: product_id }
      });
    }
  },
  mounted() {
    let params = {};
    if (this.$route.params.brand_id) {
      params["brand_id"] = this.$route.params.brand_id;
    }
    if (this.$route.params.category_id) {
      params["category_id"] = this.$route.params.category_id;
    }
    getProduct(params).then((res) => {
      this.data = res.data.product;
      this.data.forEach((item) => {
        item.product_pic = process.env.VUE_APP_IMAGE + item.product_pic;
      });
    });
  },
  watch: {
    $route: function () {
      window.location.reload();
    }
  },
  computed: {
    productList() {
      if (this.$route.params.textSearch) {
        return this.productSearch(
          this.$route.params.item,
          this.$route.params.textSearch,
          this.data
        );
      }
      return this.data;
    }
  }
};
</script>
<style scoped>
span {
  color: #2cabda;
}
.btn-primary {
  background-color: #2cabda;
  border-color: #2cabda;
}
</style>
