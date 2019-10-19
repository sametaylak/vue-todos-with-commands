import TodoModel from '@/models/TodoModel'

export default class TodoAddCommand {
  constructor (e) {
    this.event = e
  }

  execute () {
    const todo = {
      id: TodoModel.todos.length,
      content: this.event.data,
      done: false
    }

    TodoModel.todos.push(todo)
    TodoModel.currentInput = ''
  }
}
