<template>
  <div>
    <input
      @keyup.enter="addToDo"
      type="text"
      class="p-2 rounded-full mr-2 border-4 focus:border-midnight transition-all border-bermuda"
      placeholder="your toDos..."
      v-model="text"
    />
    <button
      @click="addToDo"
      class="border rounded-full p-0.5 text-metal bg-bermuda active:translate-y-0.5 transition-transform"
    >
      add
    </button>

    <ul class="wrapper pt-2">
      <li v-for="(toDo, index) in list" :key="toDo" class="overflow-auto">
        <to-do-items
          :item="toDo"
          @deleteItems="deleteItems(index)"
          class="p-2 rounded-full mr-2 border-4 focus:border-midnight transition-all border-bermuda"
        ></to-do-items>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';
import ToDoItems from './ToDoItems.vue';
export default {
  components: { ToDoItems },

  setup() {
    const text = ref('');
    const list = ref([]);

    const deleteItems = (index) => {
      list.value.splice(index, 1);
    };

    const addToDo = () => {
      if (!text.value) return;
      list.value.push(text.value);
      text.value = '';
    };

    return {
      deleteItems,
      addToDo,
      text,
      list,
    };
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  height: 400px;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
    // background-color: rgb(120 220 202);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(120 220 202);
  }
}
</style>
