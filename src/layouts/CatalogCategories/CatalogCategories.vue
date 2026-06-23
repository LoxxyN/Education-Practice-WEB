<script setup>
import { ref } from "vue";
import { CatalogCategoriesGrid } from "./CatalogCategoriesGrid/index";

const DATA = ref([
  {
    id: 1,
    categoryTitle: 'Крупная бытовая техника',
    categoriesArray: [
      {id: 1, name: 'Холодильники (135)'},
      {id: 2, name: 'Морозильные камеры (74)'},
      {id: 3, name: 'Стиральные машины (213)'},
      {id: 4, name: 'Посудомоечные машины (98)'},
    ]
  },
  {
    id: 2,
    categoryTitle: 'Товары для дома',
    categoriesArray: [
      {id: 1, name: 'Холодильники (135)'},
      {id: 2, name: 'Морозильные камеры (74)'},
      {id: 3, name: 'Стиральные машины (213)'},
      {id: 4, name: 'Посудомоечные машины (98)'},
      {id: 4, name: 'Морозильные камеры (74)'},
      {id: 4, name: 'Стиральные машины (213)'},
      {id: 4, name: 'Посудомоечные машины (98)'},
    ]
  },
  {
    id: 3,
    categoryTitle: 'Мелкая бытовая техника',
    categoriesArray: [
      {id: 1, name: 'Крепления и кронштейны для мелкой кухонной техники (135)'},
      {id: 2, name: 'Морозильные камеры (74)'},
      {id: 3, name: 'Стиральные машины (213)'},
      {id: 4, name: 'Посудомоечные машины (98)'},
    ]
  },
  {
    id: 4,
    categoryTitle: 'Крупная бытовая техника',
    categoriesArray: [
      {id: 1, name: 'Холодильники (135)'},
      {id: 2, name: 'Морозильные камеры (74)'},
      {id: 3, name: 'Стиральные машины (213)'},
      {id: 4, name: 'Посудомоечные машины (98)'},
    ]
  },
  {
    id: 5,
    categoryTitle: 'Товары для дома',
    categoriesArray: [
      {id: 1, name: 'Холодильники (135)'},
      {id: 2, name: 'Морозильные камеры (74)'},
      {id: 3, name: 'Стиральные машины (213)'},
      {id: 4, name: 'Посудомоечные машины (98)'},
      {id: 4, name: 'Морозильные камеры (74)'},
      {id: 4, name: 'Стиральные машины (213)'},
      {id: 4, name: 'Посудомоечные машины (98)'},
    ]
  },
  {
    id: 6,
    categoryTitle: 'Крупная бытовая техника',
    categoriesArray: [
      {id: 1, name: 'Холодильники (135)'},
      {id: 2, name: 'Морозильные камеры (74)'},
      {id: 3, name: 'Стиральные машины (213)'},
      {id: 4, name: 'Посудомоечные машины (98)'},
    ]
  },
  {
    id: 7,
    categoryTitle: 'Товары для дома',
    categoriesArray: [
      {id: 1, name: 'Холодильники (135)'},
      {id: 2, name: 'Морозильные камеры (74)'},
      {id: 3, name: 'Стиральные машины (213)'},
      {id: 4, name: 'Посудомоечные машины (98)'},
      {id: 4, name: 'Морозильные камеры (74)'},
      {id: 4, name: 'Стиральные машины (213)'},
      {id: 4, name: 'Посудомоечные машины (98)'},
    ]
  },
  {
    id: 8,
    categoryTitle: 'Мелкая бытовая техника',
    categoriesArray: [
      {id: 1, name: 'Крепления и кронштейны для мелкой кухонной техники (135)'},
      {id: 2, name: 'Морозильные камеры (74)'},
      {id: 3, name: 'Стиральные машины (213)'},
      {id: 4, name: 'Посудомоечные машины (98)'},
    ]
  },
])
</script>

<template>
  <section class="section">
    <h2 class="section__title">Каталог</h2>
    <hr>
    <CatalogCategoriesGrid :categoriesData="DATA" />
  </section>
</template>

<style scoped>

</style>