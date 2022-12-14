import { qs, qsa } from '~/assets/js/utils/generic'
import gsap, { Power4 } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import animations from '~/assets/js/animations/index'

export default {
  transition(to, from) {
    return {
      appear: true,
      mode: 'out-in',

      beforeEnter(el) {
      },

      enter(el, done) {
        setTimeout(() => {
          if (from === undefined) {
            animations.get('firstEnterLoader')(done).play()
          } else {
            animations.get('loaderOut')(done).play()
          }
          this.$nuxt.$emit('start-locomotive')
          this.$nuxt.$emit('update-locomotive')
          this.$store.commit('scroll/resetDirection')
        }, 600)
      },

      leave(el, done) {
        this.$nuxt.$emit('stop-locomotive')
        animations.get('loaderIn')(() => {
          done()
          this.$nuxt.$emit('reset-locomotive')
        }).play()
      }
    }
  }
}
