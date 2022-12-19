<template>
  <section :class="$style.gallery"
    ref="gallery"
    v-viewport="{
      handleResize
    }"
  >
    <h3 v-if="data.title">{{ data.title }}</h3>
    <div :class="$style.wrapper">
      <ul :class="$style.scroller">
        <Card
          v-for="project in data.projects"
          :key="project._key"
          :project="project"
          :class="$style.card"
          ref="card"
        />
      </ul>
    </div>
    <div :class="$style.controls">
      <div>
        <button @click.prevent="setIndex(-1)" aria-label="prev">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M6.89393 13.1061L6.99907 13.2112L7.10512 13.107L8.17387 12.057L8.28183 11.9509L8.17482 11.8439L4.23088 7.9H13H13.15V7.75V6.25V6.1H13H4.23088L8.17482 2.15607L8.28183 2.04906L8.17387 1.943L7.10512 0.893L6.99907 0.788802L6.89393 0.893934L0.893934 6.89393L0.787868 7L0.893934 7.10607L6.89393 13.1061Z" fill="#1E1E1E" stroke="#1E1E1E" stroke-width="0.3"/>
          </svg>
        </button>
        <button @click.prevent="setIndex(1)" aria-label="next">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M6.89393 13.1061L6.99907 13.2112L7.10512 13.107L8.17387 12.057L8.28183 11.9509L8.17482 11.8439L4.23088 7.9H13H13.15V7.75V6.25V6.1H13H4.23088L8.17482 2.15607L8.28183 2.04906L8.17387 1.943L7.10512 0.893L6.99907 0.788802L6.89393 0.893934L0.893934 6.89393L0.787868 7L0.893934 7.10607L6.89393 13.1061Z" fill="#1E1E1E" stroke="#1E1E1E" stroke-width="0.3"/>
          </svg>
        </button>
      </div>
      <div>
        <span>{{ this.index < 9 ? '0' : '' }}{{ this.index + 1 }}/{{ this.data.projects.length < 10 ? '0' : '' }}{{ this.data.projects.length }}</span>
      </div>
      <!-- <button
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
      </button> -->
    </div>
  </section>
</template>

<script>
import gsap, { Power4 } from 'gsap'

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
      timeline: null,
      amount: 240,
      animating: false
    }
  },

  mounted() {
    if (this.$refs.card) {
      this.setCards()
    }

    const hm = new Hammer(this.$refs.gallery)

    hm.on('swipeleft', () => {
      this.setIndex(1)
    })

    hm.on('swiperight', () => {
      this.setIndex(-1)
    })
  },

  methods: {
    handleResize() {
      this.setCards()
    },

    setIndex(direction) {
      if (this.animating) return

      this.animating = true

      const { projects } = this.data
      const { card } = this.$refs
      const width = window.innerWidth < 1024 ? 240 : (window.innerWidth - 96) / 2.77
      const scale = 0.87
      const oldIndex = this.index
      const newIndex = direction === 1 ? (oldIndex === projects.length - 1 ? 0 : oldIndex + 1) : (oldIndex === 0 ? projects.length - 1 : oldIndex - 1)

      if (direction === 1) {
        const secondIndex = newIndex === projects.length - 1 ? 0 : newIndex + 1
        const thirdIndex = secondIndex === projects.length - 1 ? 0 : secondIndex + 1

      const tl = gsap.timeline({ onComplete: () => { this.animating = false }})

      tl
        .add('start')
        .set(card[thirdIndex].$el, { autoAlpha: 1 })
        .to(card[oldIndex].$el, {
          duration: 1.6,
          x: -(width + 10),
          scale,
          ease: Power4.easeOut
        }, 'start')
        .to(card[newIndex].$el, {
          duration: 1.6,
          scale: 1,
          x: 0,
          ease: Power4.easeOut
        }, 'start')
        .to(card[secondIndex].$el, {
          duration: 1.6,
          x: width + 10,
          ease: Power4.easeOut
        }, 'start')
        .fromTo(card[thirdIndex].$el, {
          x: (width + 10) + ((width * scale) + 10) * 2.1
        }, {
          duration: 1.6,
          x: (width + 10) + (width * scale) + 10,
          ease: Power4.easeOut
        }, 'start')
      } else {
        const secondIndex = oldIndex === projects.length - 1 ? 0 : oldIndex + 1
        const thirdIndex = secondIndex === projects.length - 1 ? 0 : secondIndex + 1

        const tl = gsap.timeline({ onComplete: () => { this.animating = false }})

        tl
        .add('start')
        .set(card[newIndex].$el, { autoAlpha: 1 })
        .to(card[oldIndex].$el, {
          duration: 1.6,
          x: width + 10,
          scale,
          ease: Power4.easeOut
        }, 'start')
        .fromTo(card[newIndex].$el, {
          scale,
          x: -width,
        }, {
          duration: 1.6,
          scale: 1,
          x: 0,
          ease: Power4.easeOut
        }, 'start')
        .to(card[secondIndex].$el, {
          duration: 1.6,
          x: (width + 10) + (width * scale) + 10,
          ease: Power4.easeOut
        }, 'start')
        .to(card[thirdIndex].$el, {
          duration: 1.6,
          x: (width + 10) + ((width * scale) + 10) * 2.1,
          ease: Power4.easeOut
        }, 'start')
      }

      this.index = newIndex


      // this.index = index
      // this.amount = window.innerWidth < 1024 ? 240 : 300

      // if (autoplay === false && this.autoplay) {
      //   this.autoplay = autoplay

      //   if (this.timeline) {
      //     this.timeline.kill()
      //   }

      //   gsap.set(this.$refs.circle, { clearProps: 'all' })
      // }
    },

    setPercentage() {
      // if (this.autoplay) {
      //   this.timeline = gsap.timeline({ onComplete: () => {
      //     gsap.set(this.$refs.circle[this.index], { clearProps: 'all' })
      //     const newIndex = this.index === this.data.projects.length - 1 ? 0 : this.index + 1
      //     this.index = newIndex

      //     this.setPercentage()
      //   }})

      //   this.timeline
      //     .fromTo(this.$refs.circle[this.index], {
      //     strokeDashoffset: 34.5
      //   }, {
      //     duration: 6,
      //     strokeDashoffset: 0
      //   })
      // }
    },

    setCards() {
      const { projects } = this.data
      const { card } = this.$refs
      const width = window.innerWidth < 1024 ? 240 : (window.innerWidth - 96) / 2.77

      const secondIndex = this.index === projects.length - 1 ? 0 : this.index + 1
      const thirdIndex = secondIndex === projects.length - 1 ? 0 : secondIndex + 1

      card.forEach((card, i) => {
        gsap.set(card.$el, { autoAlpha: 0 })

        if (i === this.index) return

        gsap.set(card.$el, {
          x: i === secondIndex ? width + 10 : (width + 10) + (width * 0.87) + 10
        })
      })

      gsap.set([card[this.index].$el, card[secondIndex].$el, card[thirdIndex].$el], {
        autoAlpha: 1
      })
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
    relative
    w-full
    h-[240px]
    gap-[10px];

  transition: var(--long-transition);

  @screen lg {
    padding-left: 0;
    height: calc((100vw - 96px) / 2.77);
  }

  & > .card {
    @apply absolute;

    transform-origin: left bottom;
    transform: scale(0.87);
  }

  & > .card:first-of-type {
    transform: scale(1);
  }
}

.controls {
  @apply mt-[30px]
    flex
    justify-between
    items-center
    gap-[6px];

  & > div {
    @apply flex
      gap-3;

    & svg {
      @apply w-[16px]
        h-auto;
    }

    & > button:last-of-type {
      transform: rotate(180deg);
    }

    & > span {
      @apply text-headline04Mobile
        lg:text-headline04;
    }
  }

  /* & > button {
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
  } */
}
</style>