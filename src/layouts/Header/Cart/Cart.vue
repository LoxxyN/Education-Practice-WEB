<script setup>

</script>

<template>
<div class="cart flex items-center gap-8">
  <div class="cart-icon__wrapper">
    <div class="cart-icon__chip flex flex-center"><span>1</span></div>
    <img src="/icons/cart-icon.svg" alt="cart">
  </div>
  <div class="cart-info">
    <p>Корзина</p>
    <span>7500₽</span>
  </div>
</div>
</template>

<style scoped>
  .cart-icon__wrapper {
    position: relative;
    > .cart-icon__chip {
      position: absolute;
      left: -5px;
      top: -10px;

      background-color: red;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      color: white;
    }
  }

  .cart-info {
    > span {
      font-weight: 500;
    }
  }
</style>