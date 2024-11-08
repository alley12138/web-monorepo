// const s: string = 'hello TypeScript'
// console.log(s)
import { createApp, defineComponent, h } from 'vue'
import SButton from './button'

export default defineComponent({
  name: 'SButton',
  render() {
    return h('button', null, 'Sbutton')
  },
})
createApp(SButton).mount('#app')
