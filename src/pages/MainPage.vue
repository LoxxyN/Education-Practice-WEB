<script setup>
import { CatalogCategories } from "@layouts/CatalogCategories/index";
import { AboutTech } from "@layouts/AboutTech/index";
import { PopularProducts } from "@layouts/PopularProducts/index";
</script>

<template>
  <div class="wrapper">
    <PopularProducts />
    <CatalogCategories />
    <AboutTech />
  </div>
</template>