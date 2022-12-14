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
        const footer = qs('footer')

        gsap.set([el, footer ], {
          autoAlpha: 0
        })
      },

      enter(el, done) {

        setTimeout(() => {
          const footer = qs('footer')
          const tl = gsap.timeline({ paused: true, onComplete: done })

          tl.to([el, footer], { duration: 0.8, autoAlpha: 1 })

          if (from === undefined) {
            animations.get('firstEnterLoader')(
              tl.play()
            ).play()
          } else {
            tl.play()
          }

          this.$nuxt.$emit('start-locomotive')
          this.$nuxt.$emit('update-locomotive')
          this.$store.commit('scroll/resetDirection')
        }, 600)
      },

      leave(el, done) {
        this.$nuxt.$emit('stop-locomotive')
        const footer = qs('footer')

        gsap.to([el, footer], {
          duration: 0.8,
          autoAlpha: 0,
          onComplete: () => {
            done()
            this.$nuxt.$emit('reset-locomotive')
          }
        })
      }
    }
  }
}
