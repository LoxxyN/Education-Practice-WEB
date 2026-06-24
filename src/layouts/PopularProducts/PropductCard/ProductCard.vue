<script setup>
import Button from "@/components/Button/Button.vue";
import StarsIcon from "@/components/StarsIcon.vue";
import StarsEmptyIcon from "@/components/StarsEmptyIcon.vue";
import { Chip } from "@/components/Chip/index.js";

defineProps(['price', 'old_price', 'productName', 'feedbackQty', 'inStock', 'productImg', 'badgesArray'])
</script>

<template>
  <div class="card">
    <div class="card-top">
      <div class="badges">
        <Chip v-for="chip in badgesArray" :key="chip.id" :chipType="chip.type" v-show="badgesArray.length !== 0" />
      </div>
      <img :src="productImg" :alt="productName">
    </div>
    <div class="card-bottom">
      <div>
        <div class="card-bottom__prices">
          <p class="card-bottom__price fs-20">{{ price }} ₽</p>
          <span class="card-bottom__old-price">{{ old_price }} ₽</span>
        </div>
        <p>{{ productName }}</p>
      </div>

      <div class="card-bottom__feedback">
        <div>
          <span>
            <StarsIcon v-if="feedbackQty !== 0" />
            <StarsEmptyIcon v-else />
          </span>
          <span class="flex items-center gap-4 text-color--second fs-14 fw-500">
            <img src="/icons/product-card/chat-icon.svg" alt="chat-icon" />
            {{ feedbackQty }}
          </span>
        </div>
        <div>
        <Button :text="inStock ? 'Купить' : 'Нет в наличии'" :classnames="(!inStock ? 'button--not-stock' : '')" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 25px 42px 32px 45px;
  display: flex;
  flex-direction: column;
  width: 378px;
  height: 529px;
}

.badges {
  display: flex;
  gap: 20px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 5;
}

.card-top {
  position: relative;
  z-index: 4;
}

.card-bottom {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
}

.card-bottom__feedback {
  display: flex;
  flex-direction: column;
  gap: 24px;
  > div:first-child {
    display: flex;
    align-items: center;
    gap: 13px;
  }
}

.card-bottom__prices {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
}

.card-bottom__old-price {
  color: var(--text-second);
  text-decoration: line-through;
  font-size: 14px;
}
</style>
