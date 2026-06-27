<script setup>
  import { ref } from "vue";

  const NAVLINKS = ref([
    {id: 1, title: "Бытовая техника"},
    {id: 2, title: "Видео и аудио"},
    {id: 3, title: "Климат"},
    {id: 4, title: "Компьютерная техника"},
    {id: 5, title: "Дом и дача"},
    {id: 6, title: "Спорт и отдых"},
    {id: 7, title: "Инструмент"},
    {id: 8, title: "Авто"},
    {id: 9, title: "% Распродажа"},
  ])
</script>

<template>
  <nav class="navbar">
    <ul class="flex justify-between gap-8">
      <li class="navbar__link-item" v-for="link in NAVLINKS" :key="link.id">
        <a href="/">{{ link.title }}</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  margin-bottom: 10px;
}

.navbar__link-item > a {
    text-decoration: none;
    color: #000000;
}
</style>