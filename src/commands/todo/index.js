import TodoAddCommand from './AddCommand'
import TodoDeleteCommand from './DeleteCommand'
import TodoDoneCommand from './DoneCommand'

export default {
  'todo.add': TodoAddCommand,
  'todo.delete': TodoDeleteCommand,
  'todo.done': TodoDoneCommand
}
