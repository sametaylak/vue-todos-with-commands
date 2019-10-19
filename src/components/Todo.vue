<template>
  <section>
    <p>{{ todo.content }} | Status: {{ todo.done }}</p>
    <button @click="todoDone">Done</button>
    <button @click="todoDelete">Delete</button>
  </section>
</template>

<script>
  export default {
    name: 'Todo',
    props: ['todo'],
    methods: {
      todoDone () {
        this.$context.events.notify('todo.done', this.todo)
      },
      todoDelete () {
        this.$context.events.notify('todo.delete', this.todo)
      }
    }
  }
</script>
