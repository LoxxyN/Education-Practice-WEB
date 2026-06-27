<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import ButtonLg from "@/components/Button/ButtonLg.vue";

const props = defineProps(['slides', 'autoplay', 'autoplayDelay'])
const baseUrl = import.meta.env.BASE_URL
const currentSlide = ref(0)
const autoplayInterval = ref(null)

const sliderStyle = computed(() => ({
  transform: `translateX(-${currentSlide.value * 100}%)`,
  transition: 'transform 0.5s ease-in-out'
}))

const nextSlide = () => {
  if (currentSlide.value < props.slides.length - 1) {
    currentSlide.value++
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

const goToSlide = (index) => {
  currentSlide.value = index
}

const startAutoplay = () => {
  if (props.autoplay) {
    autoplayInterval.value = setInterval(() => {
      if (currentSlide.value < props.slides.length - 1) {
        currentSlide.value++
      } else {
        currentSlide.value = 0
      }
    }, props.autoplayDelay)
  }
}

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value)
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})

</script>

<template>
  <div class="slider-container">
    <div class="slider-wrapper" :style="sliderStyle">
      <div
          v-for="slide in slides"
          :key="slide.id"
          class="slide"
      >
        <div class="slide-content">
          <h2 class="slide-title">{{ slide.title }}</h2>
          <p class="slide-subtitle">{{ slide.subtitle }}</p>
          <ButtonLg classnames="button--white" :text="slide.buttonText"/>
        </div>
        <div class="slide-image">
          <img :src="`${baseUrl}${slide.image}`" :alt="slide.title">
        </div>
      </div>
    </div>

    <button class="nav-arrow prev" @click="prevSlide" :disabled="currentSlide === 0">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M15 18l-6-6 6-6"/>
      </svg>
    </button>
    <button class="nav-arrow next" @click="nextSlide" :disabled="currentSlide === slides.length - 1">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 18l6-6-6-6"/>
      </svg>
    </button>

    <div class="dots-indicator">
      <span
          v-for="(slide, index) in slides"
          :key="index"
          class="dot"
          :class="{ active: currentSlide === index }"
          @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<style scoped>
.slider-container {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 12px;
}

.slider-wrapper {
  display: flex;
  width: 100%;
  height: 460px;
}

.slide {
  min-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 110px;
  background: radial-gradient(ellipse at center, #7FB1ED 0%, #437FC8 35%, #1C50BF 72%, #1C4E8A 88%, #1A467C 100%);
  box-sizing: border-box;
}

.slide-content {
  flex: 1;
  max-width: 50%;
  color: white;
}

.slide-title {
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 16px;
}

.slide-subtitle {
  font-size: 22px;
  margin-bottom: 32px;
  opacity: 0.9;
}

.slide-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50%;
}

.slide-image img {
  max-width: 100%;
  max-height: 300px;
  object-fit: contain;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));
}

.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
  backdrop-filter: blur(10px);
}

.nav-arrow:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.4);
}

.nav-arrow:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.nav-arrow.prev {
  left: 20px;
}

.nav-arrow.next {
  right: 20px;
}

.dots-indicator {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: white;
  width: 30px;
  border-radius: 5px;
}
</style>