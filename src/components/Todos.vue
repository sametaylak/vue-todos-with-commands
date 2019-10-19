<template>
  <section>
    <input type="text" placeholder="What do you want to do?" v-model="currentInput" @keydown.enter="submitTodo">
    <p v-if="!todos.length">Nothing left todo!</p>
    <ul v-else>
      <li v-for="todo in todos" :key="todo.id">
        <todo :todo="todo" />
      </li>
    </ul>
  </section>
</template>

<script>
  import TodoModel from '@/models/TodoModel'
  import Todo from '@/components/Todo'

  export default {
    name: 'Todos',
    components: {
      Todo
    },
    data () {
      return TodoModel
    },
    methods: {
      submitTodo (e) {
        this.$context.events.notify('todo.add', e.currentTarget.value)
      }
    }
  }
</script>
