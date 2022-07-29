<script setup>
import ToDoList from './components/ToDoList.vue';
import ToDoTitle from './components/ToDoTitle.vue';
</script>

<template>
  <div class="container">
    <to-do-title color="rgb(120, 220, 202)"> </to-do-title>
    <to-do-list></to-do-list>
  </div>
</template>

<style scoped></style>
