<script setup>
import { ProductCard } from "./PropductCard/index";
import {onMounted, ref} from "vue";
import {PopularProductsAds} from "@/layouts/PopularProducts/PopularProductsAds/index.js";

let productData = ref([])

onMounted(() => {
  async function getProductsData() {
    const res = await fetch("/data/products.json")
    const { products } = await res.json()
    productData.value = products
  }
getProductsData()
})
</script>

<template>
  <section class="section">
    <h2 class="section__title">Популярное</h2>
    <hr>
    <div class="products__grid">
      <ProductCard
          v-for="item in productData"
          :inStock="item.inStock"
          :feedbackQty="item.feedbackQty"
          :price="item.price"
          :old_price="item.old_price"
          :productName="item.productName"
          :productImg="item.productImg"
          :badgesArray="item.badgesArray"
      />
    </div>
    <PopularProductsAds />
  </section>
</template>

<style scoped>
.products__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
</style>