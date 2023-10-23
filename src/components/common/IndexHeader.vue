<template>
  <header>
    <div>
      <router-link :to="{ name: 'index' }">
        <b-img :src="company.logo" fluid alt="没有找到图片"></b-img>
      </router-link>
    </div>
    <nav class="navbar navbar-expand-md bg-light navbar-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <b-nav tabs fill>
          <b-nav-item-dropdown toggle-class="text-dark" text="品牌">
            <b-dropdown-item v-for="item in brand" :key="item.brand_id">
              <router-link
                :to="{
                  name: 'productBrand',
                  params: { brand_id: item.brand_id }
                }"
              >
                {{ item.brand_name }}
              </router-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="类型" toggle-class="text-dark">
            <b-dropdown-item v-for="item in category" :key="item.category_id">
              <router-link
                :to="{
                  name: 'productCategory',
                  params: { category_id: item.category_id }
                }"
              >
                {{ item.category_name }}
              </router-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item>技术文档</b-nav-item>
          <b-nav-item>关于我们</b-nav-item>
        </b-nav>
        <form class="form-inline my-2 my-lg-0">
          <b-form-select
            v-model="selected"
            :options="options"
            value-field="item"
            text-field="name"
            class="w-15"
          >
          </b-form-select>
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            class="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            @click="submitSearch"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  </header>
  <!-- <b-container>
    <b-row align-v="center">
      <b-col cols="mb-4">
        <div>
          <router-link :to="{ name: 'index' }">
            <b-img :src="company.logo" fluid alt="没有找到图片"></b-img>
          </router-link>
        </div>
      </b-col>
      <b-col class="mb-2">
        <div>
          <p class="h1 mb-2">
            <b-icon icon="telephone-fill"></b-icon> {{ company.tel }}
          </p>
        </div>
      </b-col>
    </b-row>
    <b-row align-v="center">
      <b-col>
        <div>
          <b-input-group>
            <b-form-select
              v-model="selected"
              :options="options"
              value-field="item"
              text-field="name"
              class="w-15 p-1"
            >
            </b-form-select>
            <b-form-input
              aria-label="Input"
              class="w-50 p-3"
              v-model="inputText"
            ></b-form-input>
            <b-button variant="outline-primary" @click="submitSearch"
              >搜索</b-button
            >
          </b-input-group>
        </div>
      </b-col>
    </b-row>
    <div class="mt-4"></div>
    <b-row>
      <b-col>
        <div>
          <b-nav tabs fill>
            <b-nav-item-dropdown text="品牌">
              <b-dropdown-item v-for="item in brand" :key="item.brand_id">
                <router-link
                  :to="{
                    name: 'productBrand',
                    params: { brand_id: item.brand_id }
                  }"
                >
                  {{ item.brand_name }}
                </router-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="类型">
              <b-dropdown-item v-for="item in category" :key="item.category_id">
                <router-link
                  :to="{
                    name: 'productCategory',
                    params: { category_id: item.category_id }
                  }"
                >
                  {{ item.category_name }}
                </router-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item>技术文档</b-nav-item>
            <b-nav-item>关于我们</b-nav-item>
          </b-nav>
        </div>
      </b-col>
    </b-row>
    <div class="mt-4"></div>
  </b-container> -->
</template>
<script>
import { companyInfo, getBrand, getCategory } from "../../api/index";
export default {
  name: "IndexHeader",
  data() {
    return {
      company: {},
      brand: [],
      category: [],
      selected: "1",
      options: [
        { item: "1", name: "品牌" },
        { item: "2", name: "类别" },
        { item: "3", name: "名称" }
      ],
      inputText: ""
    };
  },
  methods: {
    getData() {
      companyInfo().then((res) => {
        this.company = res.data[0];
        this.company.logo = process.env.VUE_APP_IMAGE + this.company.logo;
      });
      getBrand().then((res) => {
        this.brand = res.data;
      });
      getCategory().then((res) => {
        this.category = res.data;
      });
    },
    submitSearch() {
      this.$router
        .push({
          name: "productSearch",
          params: {
            item: this.selected,
            textSearch: this.inputText
          }
        })
        .catch(() => {});
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
