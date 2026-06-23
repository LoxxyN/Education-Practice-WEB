<script setup>
import { Header } from "@/layouts/Header/index.js";
import './global.css'
import './normalize.css'
import { Footer } from "@/layouts/Footer/index.js";
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>
