<script setup>
defineProps(['title', 'categoriesArray'])
</script>

<template>
  <div class="catalog-category">
    <h3 class="catalog-category__title fs-20 fw-500">{{title}}</h3>

    <ul class="catalog-category__list" v-for="category in categoriesArray">
      <li class="catalog-category__list-item">{{category.name}}</li>
    </ul>

    <a href="#" class="catalog-category__link">Все товары <svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M29.9515 4.03553C30.1467 3.84027 30.1467 3.52369 29.9515 3.32842L26.7695 0.146442C26.5742 -0.0488198 26.2577 -0.0488198 26.0624 0.146442C25.8671 0.341705 25.8671 0.658287 26.0624 0.853549L28.8908 3.68198L26.0624 6.5104C25.8671 6.70567 25.8671 7.02225 26.0624 7.21751C26.2577 7.41277 26.5742 7.41277 26.7695 7.21751L29.9515 4.03553ZM0 3.68198V4.18198H29.5979V3.68198V3.18198H0V3.68198Z" fill="#437FC8"/>
    </svg></a>
  </div>
</template>

<style scoped>
.catalog-category__list {
  margin-block: 10px;
}

.catalog-category__link {
  text-decoration: none;
  color: var(--accent);
  display: flex;
  gap: 8px;
  align-items: center;
}
</style>

