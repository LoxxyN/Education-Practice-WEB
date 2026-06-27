<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['close'])
const dropdownRef = ref(null)
const baseUrl = import.meta.env.BASE_URL
const CART_ITEMS = ref([
  {
    id: 1,
    name: 'Холодильник Electrolux EWH 80 Formax',
    code: '519868.0',
    price: 14300,
    oldPrice: 18000,
    image: 'images/products/microwave.png',
    quantity: 1
  },
  {
    id: 2,
    name: 'Микроволновка Electrolux EWP 35',
    code: '519868.0',
    price: 9500,
    oldPrice: 15000,
    image: 'images/products/microwave.png',
    quantity: 1
  }
])

const totalAmount = CART_ITEMS.value.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);

const closeMenu = () => {
  emit('close')
}

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    closeMenu()
  }
}

onMounted(() => {
  setTimeout(() => {
    document.addEventListener('click', handleClickOutside)
  }, 0)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const formatPrice = (price) => {
  return price.toLocaleString('ru-RU') + ' ₽'
}
</script>

<template>
  <div class="cart-dropdown" ref="dropdownRef">
    <div class="cart-dropdown__header" v-for="item in CART_ITEMS">
      <div class="cart-dropdown__item-info">
        <img
            :src="`${baseUrl}${item.image}`"
            alt="Товар"
            class="cart-dropdown__item-image"
        >
        <div class="cart-dropdown__item-details">
          <h4 class="cart-dropdown__item-name">{{ item.name }}</h4>
          <p class="cart-dropdown__item-code">Код товара: {{ item.code }}</p>
        </div>
      </div>
      <div class="cart-dropdown__item-price-wrapper">
        <span class="cart-dropdown__item-price">{{ formatPrice(item.price) }}</span>
        <span v-if="item.oldPrice" class="cart-dropdown__item-old-price">
          {{ formatPrice(item.oldPrice) }}
        </span>
      </div>
    </div>

    <div class="cart-dropdown__total">
      <span class="cart-dropdown__total-label">Итого:</span>
      <span class="cart-dropdown__total-amount">{{ formatPrice(totalAmount) }}</span>
    </div>

    <router-link to="/cart" class="cart-dropdown__button" @click="closeMenu">
      Перейти в корзину
    </router-link>
  </div>
</template>

<style scoped>
.cart-dropdown {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  width: 380px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  padding: 20px;
  animation: dropdownFadeIn 0.2s ease-out;
}

@keyframes dropdownFadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cart-dropdown__header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e5e7eb;
}

.cart-dropdown__item-info {
  display: flex;
  gap: 12px;
  flex: 1;
}

.cart-dropdown__item-image {
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 8px;
  background: #f9fafb;
}

.cart-dropdown__item-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.cart-dropdown__item-name {
  font-size: 14px;
  font-weight: 500;
  color: #1f2937;
  margin: 0;
  line-height: 1.4;
}

.cart-dropdown__item-code {
  font-size: 12px;
  color: #6b7280;
  margin: 0;
}

.cart-dropdown__item-price-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
}

.cart-dropdown__item-price {
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
}

.cart-dropdown__item-old-price {
  font-size: 14px;
  color: #9ca3af;
  text-decoration: line-through;
}

.cart-dropdown__total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  margin-bottom: 16px;
}

.cart-dropdown__total-label {
  font-size: 16px;
  font-weight: 500;
  color: #1f2937;
}

.cart-dropdown__total-amount {
  font-size: 18px;
  font-weight: 700;
  color: #1f2937;
}

.cart-dropdown__button {
  display: block;
  width: 100%;
  padding: 14px 24px;
  background: #3b82f6;
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.2s;
  cursor: pointer;
}

.cart-dropdown__button:hover {
  background: #2563eb;
}
</style>