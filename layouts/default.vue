<template>
  <div
    v-viewport.initial="{
      handleResize
    }"
    :class="[
      $style.main,
      {
        [$style.hidden]: !isMounted
      }
    ]"
  >
    <Loader />
    <Header :isMounted="isMounted" />
    <LocomotiveScroll
      ref="scroller"
      :getted-options="{
        lerp: 0.06,
        smooth: true,
        direction: 'vertical',
        getDirection: true
      }"
    >
      <div>
        <nuxt />
      </div>
      <Footer />
    </LocomotiveScroll>
  </div>
</template>

<script>
import { isTouch } from '~/assets/js/utils/generic'
import LocomotiveScroll from '~/locomotive/component/index.vue'
import animations from '~/assets/js/animations/index'

export default {
  name: 'default',

  components: {
    LocomotiveScroll
  },

  data() {
    return {
      isTouch: false,
      isMounted: true
    }
  },

  mounted() {
    // setTimeout(this.toggleMounted, 1000)
  },

  methods: {
    toggleMounted() {
      // this.isMounted = !this.isMounted
      animations.get('firstEnterLoader')().play()
    },

    handleResize() {
      const touch = isTouch()
      this.isTouch = touch
      const factory = touch ? 'remove' : 'add'
      const vh = window.innerHeight * 0.01
      const vw = window.innerWidth * 0.01

      document.body.classList[factory]('no-touchevents')
      document.documentElement.style.setProperty('--vh', `${vh}px`)
      document.documentElement.style.setProperty('--vw', `${vw}px`)
    }
  }
}
</script>

<style module lang="postcss">
.main {
  transition: var(--fast-transition);
  /* @apply flex
    flex-col
    justify-between
    max-w-[400px]
    mx-auto
    px-[38px]
    md:px-0;

  min-height: calc(var(--vh, 1vh) * 100);
  transition: var(--medium-transition);

  &.hidden {
    @apply opacity-0;
  } */
  &.hidden {
    @apply opacity-0;
  }
}
</style>
