import TodoModel from '@/models/TodoModel'

export default class TodoDeleteCommand {
  constructor (e) {
    this.event = e
    this.todo = this.event.data
  }

  execute () {
    const todoIdx = TodoModel.todos.findIndex(todo => todo.id === this.todo.id)
    if (todoIdx !== -1) {
      TodoModel.todos.splice(todoIdx, 1)
    }
  }
}
