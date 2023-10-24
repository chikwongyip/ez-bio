<template>
  <div></div>
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
      });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
<style scoped></style>
