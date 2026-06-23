<script setup>

</script>

<template>
  <div class="catalog-categories__ads-background flex justify-between">
    <div>
      <h2>AirPods Pro</h2>
      <p>Успей приобрести всего за <span>2590₽</span></p>
    </div>
    <div><img src="/images/airpods-ads.svg" alt="airpods ads"></div>
  </div>
</template>

<style scoped>
  .catalog-categories__ads-background {
    border-radius: 5px;
    background-color: #142840;
    color: white;
    div {
      width: 48%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    > div {
      font-size: 30px;
      flex-direction: column;
      h2 {
        font-size: 60px;
        font-weight: 500;
      }
      span {
        font-weight: 600;
      }
    }
  }
</style>