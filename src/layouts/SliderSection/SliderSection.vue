<script setup>
import { Slider } from "@components/Slider/index";

const slides = [
  {
    id: 1,
    title: 'Большой выбор стиральных машин',
    subtitle: 'Успей купить по суперцене',
    buttonText: 'Подробнее',
    image: '/images/stiralki.png'
  },
  {
    id: 2,
    title: 'Большой выбор стиральных машин',
    subtitle: 'Успей купить по суперцене',
    buttonText: 'Подробнее',
    image: '/images/stiralki.png'
  },
  {
    id: 3,
    title: 'Большой выбор стиральных машин',
    subtitle: 'Успей купить по суперцене',
    buttonText: 'Подробнее',
    image: '/images/stiralki.png'
  },
  {
    id: 4,
    title: 'Большой выбор стиральных машин',
    subtitle: 'Успей купить по суперцене',
    buttonText: 'Подробнее',
    image: '/images/stiralki.png'
  }
]
</script>

<template>
  <section>
    <Slider :slides="slides" :autoplay="true" :autoplay-delay="5000" />
  </section>
</template>

<style scoped>

</style>