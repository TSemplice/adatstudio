<template>
  <section :class="$style.gallery" ref="gallery">
    <h3 v-if="data.title">{{ data.title }}</h3>
    <div :class="$style.wrapper">
      <ul :class="$style.scroller" :style="{ transform: `translate3d(-${(240 * index) + (10 * index)}px, 0, 0)` }">
        <Card
          v-for="project in data.projects"
          :key="project._key"
          :project="project"
        />
      </ul>
    </div>
    <div :class="$style.controls">
      <button
        aria-label="Bullet Selector"
        v-for="(project, ix) in data.projects"
        :key="`bullet-${ix}`"
        @click.prevent="setIndex(ix, false)"
      >
        <svg
          :class="[
            {
              [$style.notAutoplay]: !autoplay,
              [$style.active]: ix === index
            }
          ]"
          ref="circle"
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          >
          <circle cx="6.5" cy="6" r="5.5" stroke="#1E1E1E"/>
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
import gsap from 'gsap'

let Hammer

if (process.client) {
  Hammer = require('hammerjs')
}

export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      index: 0,
      autoplay: true,
      timeline: null
    }
  },

  mounted() {
    if (this.autoplay) {
      setTimeout(this.setPercentage, 2000)
    }

    const hm = new Hammer(this.$refs.gallery)

    hm.on('swipeleft', () => {
      const newIndex = this.index === this.data.projects.length - 1 ? 0 : this.index + 1

      this.setIndex(newIndex, false)
    })

    hm.on('swiperight', () => {
      const newIndex = this.index === 0 ? this.data.projects.length - 1 : this.index - 1
      this.setIndex(newIndex, false)
    })
  },

  methods: {
    setIndex(index, autoplay) {
      this.index = index

      if (autoplay === false && this.autoplay) {
        this.autoplay = autoplay

        if (this.timeline) {
          this.timeline.kill()
        }

        gsap.set(this.$refs.circle, { clearProps: 'all' })
      }
    },

    setPercentage() {
      if (this.autoplay) {
        this.timeline = gsap.timeline({ onComplete: () => {
          gsap.set(this.$refs.circle[this.index], { clearProps: 'all' })
          const newIndex = this.index === this.data.projects.length - 1 ? 0 : this.index + 1
          this.index = newIndex

          this.setPercentage()
        }})

        this.timeline
          .fromTo(this.$refs.circle[this.index], {
          strokeDashoffset: 34.5
        }, {
          duration: 6,
          strokeDashoffset: 0
        })
      }
    }
  }
}
</script>

<style module lang="postcss">
.gallery {
  @apply py-10;

  & > h3 {
    @apply text-headline03Mobile
      font-black
      uppercase
      mb-[10px];
  }
}

.scroller {
  @apply flex
    w-[fit-content]
    gap-[10px];

  padding-left: calc(((100vw - 72px) - 240px) / 2);
  transition: var(--long-transition);

  @screen lg {
    padding-left: 0;
  }
}

.controls {
  @apply mt-[30px]
    flex
    justify-center
    gap-[6px];

  & > button {
    @apply w-[12px]
      h-[12px]
      flex
      justify-center
      items-center
      relative;

    & svg {
      @apply absolute
        top-0
        left-0
        w-full
        h-full;

      stroke-dasharray: 34.5;
      stroke-dashoffset: 34.5;

      &.active {
        &.notAutoplay {
          stroke-dashoffset: 0;
        }
      }

      &.notAutoplay {
        @apply opacity-100;

        transition: var(--long-transition);
      }
    }

    &::before {
      @apply w-[6px]
        h-[6px]
        block
        bg-dark;

      content: '';
      border-radius: 100%;
    }
  }
}
</style>