<script setup>
defineProps(['chipType'])

const chipLabelMap = {
  'new': 'Новинка',
  'sale': '-20%',
  'gift': 'Подарок'
}
</script>

<template>
  <div class="chip" :class="chipType">
    <p class="chip__label fs-14 fw-600">{{chipLabelMap[chipType]}}</p>
  </div>
</template>

<style scoped>
  .chip {
    width: fit-content;
    padding: 4px 12px;
    border-radius: 5px;
    color: white;
  }

  .new {
    background-color: #55BB9F;
  }

  .sale {
    background-color: #FC443B;
  }

  .gift {
    background-color: #7FB1ED;
  }
</style>