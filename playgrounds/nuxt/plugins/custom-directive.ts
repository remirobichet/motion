import { MotionPlugin } from '@vueuse/motion'

console.log('⚡ custom-directive.ts')

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(MotionPlugin, {
    directives: {
      'my-directive': {
        initial: {
          scale: 0,
          opacity: 0,
          x: 500,
          y: 500,
        },
        visible: {
          scale: 1,
          opacity: 1,
          x: 0,
          y: 0,
        },
      },
    },
  })
})
