<template>
  <div class="container text-left">
    <div class="mt-3"></div>
    <h1>我们的品牌</h1>
    <div class="mt-3"></div>
    <div v-for="(row, index) in formatBrand" :key="index">
      <b-card-group deck>
        <b-card
          v-for="item in row"
          :key="item.brand_id"
          no-body
          class="overflow-hidden text-center"
          style="max-width: 200px"
          :footer="item.brand_name"
          footer-tag="footer"
        >
          <b-row no-gutters>
            <b-card-img
              :src="item.brand_image"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
          </b-row>
        </b-card>
      </b-card-group>
      <div class="mt-3"></div>
    </div>
  </div>
</template>
<script>
import { getBrand } from "@/api";
export default {
  name: "IndexBrand",
  data() {
    return {
      brands: []
    };
  },
  methods: {
    getData() {
      getBrand().then((res) => {
        this.brands = res.data;
        this.brands.forEach((item) => {
          item.brand_image = process.env.VUE_APP_IMAGE + item.brand_image;
        });
      });
    }
  },
  mounted() {
    this.getData();
  },
  computed: {
    formatBrand() {
      // 计算品牌的数量获取一个4 行 * n 列的数组
      return this.brands.reduce((c, n, i) => {
        if (i % 5 === 0) {
          c.push([]);
        }
        c[c.length - 1].push(n);
        return c;
      }, []);
    }
  }
};
</script>
<style scoped></style>
