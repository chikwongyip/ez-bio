<template>
  <div class="container">
    <div class="row g-4">
      <div class="col-md-4" v-for="item in data" :key="item.id">
        <b-card :title="item.name" @click="cardListOnClick(item.docs)">
          <b-card-text>
            <b-icon-file-earmark-pdf></b-icon-file-earmark-pdf>
            <span>{{ item.name + ".pdf" }}</span>
          </b-card-text>
          <div class="d-flex gap-2 small text-muted">
            <span>{{ "上传时间：" + item.date }}</span>
          </div>
          <div class="d-flex gap-2 small text-muted">
            <span>{{ "文件大小：" + item.size + "m" }}</span>
          </div>
        </b-card>
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
    cardListOnClick(url) {
      window.open(url, "_blank");
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
<style scoped></style>
