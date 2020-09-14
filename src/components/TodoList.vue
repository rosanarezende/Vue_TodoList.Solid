<template functional>
  <div class="container">
    <div class="todo-list">
      <slot /><!-- com isso aplico o princípio de abertura e fechamento -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.todo-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
}
</style>
