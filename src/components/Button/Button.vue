<script setup>
const props = defineProps(['text', 'classnames'])
</script>

<template>
  <button :class="classnames" class="button">{{ props.text }}</button>
</template>

<style>
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: none;
    background-color: var(--accent);
    color: white;
    padding: 8px 16px;
  }

  .button--not-stock {
    background-color: #999999;
  }
</style>