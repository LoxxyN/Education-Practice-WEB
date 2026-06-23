<script setup>
const props = defineProps(['text', 'isStock', 'classnames'])
</script>

<template>
  <button :class="classnames" class="button--lg">{{ props.text }}</button>
</template>

<style>
.button--lg {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: none;
  background-color: var(--accent);
  color: white;
  padding: 13px 22px;
}
</style>