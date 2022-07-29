<template>
  <h1 :style="{ color: props.color }">
    <slot> ToDo </slot>
  </h1>
</template>

<script setup>
const props = defineProps({
  color: String,
});
</script>

<style scoped></style>
