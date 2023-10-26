<template>
  <div class="container">
    <div
      class="row justify-content-center mb-3"
      v-for="item in data"
      :key="item.docs_id"
    >
      <div class="col-md-12">
        <div class="card shadow-0 border rounded-3">
          <div class="card-body">
            <div class="row g-0">
              <div class="col-xl-6 col-md-5 col-sm-7">
                <h5>{{ item.name }}</h5>

                <div class="d-flex flex-row">
                  <div class="text-warning mb-1 me-2">
                    <span class="ms-1"> 品牌名称: </span>
                  </div>
                  <span class="text-muted">{{ item.brand_name }}</span>
                </div>
              </div>
              <div class="col-xl-3 col-md-3 col-sm-5">
                <div class="mt-4">
                  <button
                    class="btn btn-primary"
                    type="button"
                    @click="viewPdf(item.docs)"
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
import { getDocs } from "@/api";
export default {
  data() {
    return {
      data: []
    };
  },
  methods: {
    getData() {
      getDocs().then((res) => {
        this.data = res.data;
        this.data.forEach((item) => {
          item.docs = process.env.VUE_APP_IMAGE + item.docs;
        });
      });
    },
    viewPdf(url) {
      window.open(url, "_blank");
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
<style scoped></style>
