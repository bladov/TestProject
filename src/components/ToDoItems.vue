<template>
  <div class="flex justify-between p-2 border mb-2 border-tahiti rounded">
    <div class="m-0">{{ item }}</div>
    <button
      @click="deleteItems"
      class="border rounded-full p-0.5 text-black bg-red active:translate-y-0.5 transition-transform"
    >
      delete
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  item: String,
});

const emit = defineEmits(['deleteItems']);

const deleteItems = () => emit('deleteItems');
</script>

<style scoped></style>
