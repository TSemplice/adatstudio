<template>
  <div v-locomotive="{ options }" class="js-locomotive">
    <slot />
  </div>
</template>

<script>
import { qs, qsa } from '~/assets/js/utils/generic'
import animations from '~/assets/js/animations/index'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'LocomotiveScroll',
  directives: {
    locomotive: {
      inserted(el, binding, vnode) {
        vnode.context.locomotive = new vnode.context.LocomotiveScroll({
          el,
          ...binding.value.options,
        })
        vnode.context.locomotive.on('scroll', (e) => {
          vnode.context.onScroll(e)
          vnode.context.$emit('scroll')
        })
        vnode.context.$emit('init')
      },
      unbind(el, binding, vnode) {
        vnode.context.locomotive.destroy()
        vnode.context.locomotive = undefined
      },
    },
  },

  props: {
    gettedOptions: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    locomotive: undefined,
    defaultOptions: {
      smooth: true,
    },
  }),
  computed: {
    options() {
      return { ...this.defaultOptions, ...this.gettedOptions }
    },
  },

  mounted() {
    this.$nuxt.$on('update-locomotive', () => {
      this?.locomotive?.update()
    })

    this.$nuxt.$on('start-locomotive', () => {
      const compos = qsa('[data-scroll-call]')

      compos.forEach(compo => {
        compo.setAttribute('data-r', 'true')
      })

      this?.locomotive?.start()
    })

    this.$nuxt.$on('stop-locomotive', () => {
      this?.locomotive?.stop()
    })

    this.$nuxt.$on('reset-locomotive', () => {
      this?.locomotive?.scrollTo('top', { duration: 0, disableLerp: true })
    })

    this.$nuxt.$on('scroll-to', ({ key }) => {
      this?.locomotive?.scrollTo(`[data-component-key="${key}"]`, { offset: -40 })
    })

    this?.locomotive.on('call', (func, args, obj) => {
      if (obj.el.getAttribute('data-animated') === 'true') return

      if (obj.el.getAttribute('data-r') === 'true') {
        obj.el.setAttribute('data-animated', 'true')

        const delay = obj.el.getAttribute('data-delay')

        if (delay) {
          animations.get(obj.el.getAttribute('data-scroll-call'))(obj.el, delay, this?.locomotive?.el).play()
        } else {
          animations.get(obj.el.getAttribute('data-scroll-call'))(obj.el, 0, this?.locomotive?.el).play()
        }
      }
    })

    const smooth = this.locomotive

    smooth.on('scroll', ScrollTrigger.update)

    ScrollTrigger.scrollerProxy(smooth.el, {
      scrollTop(value) {
        return arguments.length ? smooth.scrollTo(value, 0, 0) : smooth.scroll.instance.scroll.y
      },
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight}
      }
    })

    ScrollTrigger.addEventListener('refresh', () => this?.locomotive?.update())
    ScrollTrigger.refresh()
  },

  methods: {
    onScroll(e) {
      if (typeof this.$store._mutations['scroll/setScroll'] !== 'undefined') {
        this.$store.commit('scroll/setScroll', {
          isScrolling: this.locomotive.scroll.isScrolling,
          limit: { ...e.limit },
          ...e.scroll,
          direction: e.direction
        })
      }
    },
  },
}
</script>
<style lang="postcss">
@import './style.css';
</style>
