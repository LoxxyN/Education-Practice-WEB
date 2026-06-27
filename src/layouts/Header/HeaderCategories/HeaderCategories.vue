<script setup>
import {ref} from "vue";

const NAVLINKS = ref([
  { id: 1, title: "Техника", link: "/tech" },
  { id: 2, title: "Мебель", link: "/mebel" },
  { id: 3, title: "Инструменты", link: "/tools" },
])
</script>

<template>
  <nav class="header-categories">
    <ul class="header-categories__list">
      <li v-for="link in NAVLINKS" class="header-categories__list-item" :key="link.id">{{link.title}}</li>
    </ul>
  </nav>
</template>

<style scoped>
.header-categories__list {
  display: flex;
  gap: 25px;
}

.header-categories__list-item {
  cursor: pointer;
  transition: var(--transition);
   &:is(:hover, :focus) {
     color: var(--accent);
     font-weight: 500;
   }
}
</style>