import TodoModel from '@/models/TodoModel'

export default class TodoDoneCommand {
  constructor (e) {
    this.event = e
    this.todo = this.event.data
  }

  execute () {
    const todo = TodoModel.todos.find(t => t.id === this.todo.id)
    if (todo) {
      todo.done = true
    }
  }
}
