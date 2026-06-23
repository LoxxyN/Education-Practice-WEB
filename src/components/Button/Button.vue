<script setup>
const props = defineProps(['text', 'isStock', 'classnames'])
</script>

<template>
  <button :class="classnames" class="button {{props.isStock === false ? 'button--not-stock' : ''}}">{{ props.text }}</button>
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
  }
</style>