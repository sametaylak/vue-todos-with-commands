import Vue from 'vue'
import VueCommander from 'vuecommander'

// Commands
import TodoCommands from '@/commands/todo'

Vue.use(VueCommander)

export default new VueCommander.Context({
  ...TodoCommands
})
