<template>
  <div>
    <Header listName="My new todo list" />
    <main>
      <TodoList :todos="todos">
        <TodoCard
          v-for="{ id, title, completed } in todos"
          :key="id"
          :title="title"
          :completed="completed"
        />
        <!-- <TodoRow
          v-for="{ id, title, completed } in todos"
          :key="id"
          :id="id"
          :title="title"
          :completed="completed"
        /> -->
      </TodoList>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { InterfaceTodo, InterfaceApi } from "@/types";
import { Api } from "@/api/api";
import Header from "@/components/Header.vue";
import TodoList from "@/components/TodoList.vue";
import TodoCard from "@/components/TodoCard.vue";
import TodoRow from "@/components/TodoRow.vue";

@Component({
  components: { Header, TodoList, TodoCard, TodoRow }
})
export default class Home extends Vue implements InterfaceApi {
  todos: InterfaceTodo[] = [];

  async mounted() {
    this.todos = await this.fetch();
  }

  async fetch(): Promise<InterfaceTodo[]> {
    const api = new Api();
    return await api.fetch("todos");
  }
}
</script>

<style lang="scss">
.container {
  padding: 1.5rem;
}
</style>
