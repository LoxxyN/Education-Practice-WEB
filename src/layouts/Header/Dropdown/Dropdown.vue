<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['close'])
const dropdownRef = ref(null)

const menuItems = ref([
  { label: 'Личный кабинет', link: '/profile' },
  { label: 'Настройки', link: '/settings'},
  { label: 'Сообщения',  badge: 2, link: '/messages' },
  { label: 'Избранное', link: '/favorite' },
  { label: 'Мои заказы', link: '/orders' }
])

const closeMenu = () => {
  emit('close')
}

const handleClickOutside = (event) => {
  // Используем ref вместо querySelector
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    closeMenu()
  }
}

onMounted(() => {
  // Небольшая задержка, чтобы не сработало на клик открытия
  setTimeout(() => {
    document.addEventListener('click', handleClickOutside)
  }, 0)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="cabinet-dropdown" ref="dropdownRef">
    <ul class="cabinet-dropdown__list">
      <li
          v-for="(item, index) in menuItems"
          :key="index"
          class="cabinet-dropdown__item"
          @click.stop="closeMenu"
      >
        <div class="cabinet-dropdown__item-content">
          <router-link :to="item.link">{{ item.label }}</router-link>
        </div>
        <span v-if="item.badge" class="cabinet-dropdown__badge">{{ item.badge }}</span>
      </li>
      <li class="cabinet-dropdown__item cabinet-dropdown__item--exit" @click.stop="closeMenu">
        <span>Выйти</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.cabinet-dropdown {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  width: 280px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  padding: 12px 0;
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

.cabinet-dropdown__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.cabinet-dropdown__item {
  padding: 12px 20px;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  color: #333;
}

.cabinet-dropdown__item:hover {
  background-color: #f5f5f5;
}

.cabinet-dropdown__item-content {
  display: flex;
  align-items: center;
  gap: 12px;
  > * {

  text-decoration: none;
  color: black;
    &:checked {
      color: black;
    }
  }
}

.cabinet-dropdown__badge {
  background: #ef4444;
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
}

.cabinet-dropdown__item--exit {
  border-top: 1px solid #e5e7eb;
  margin-top: 8px;
  padding-top: 16px;
  color: #2563eb;
}

.cabinet-dropdown__item--exit:hover {
  background-color: #f0f9ff;
}
</style>