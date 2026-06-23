<script setup>
import { CatalogCategoriesList } from "./CatalogCategoriesList/index";

defineProps(['categoriesData'])
</script>

<template>
  <div class="catalog-categories__grid">
    <CatalogCategoriesList v-for="categoryList in categoriesData" key="{{categoryList.id}}" :title="categoryList.categoryTitle" :categoriesArray="categoryList.categoriesArray" />
  </div>
</template>

<style scoped>
.catalog-categories__grid {
  display: grid;
  row-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
}
</style>

