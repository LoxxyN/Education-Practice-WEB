<script setup>
const NAVLINKS = [
  { id: 1, title: "Техника", link: "/tech" },
  { id: 2, title: "Мебель", link: "/mebel" },
  { id: 3, title: "Инструменты", link: "/tools" },
]
</script>

<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li v-for="link in NAVLINKS" class="navbar__list-item" :key="link.id">{{link.title}}</li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar__list {
  display: flex;
  gap: 25px;
}

.navbar__list-item {
  cursor: pointer;
  transition: var(--transition);
   &:is(:hover, :focus) {
     color: var(--accent);
     font-weight: 500;
   }
}
</style>