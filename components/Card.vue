<template>
  <li :class="$style.card">
    <div :class="[
      $style.inner,
      {
        [$style.flipped]: flipped
      }
    ]">
      <div :class="$style.front">
        <div v-if="project.image" :class="$style.background">
          <SanityLazyImage
            v-bind="project.image"
            :transformations="{
              auto: 'format',
              fit: 'max',
              w: '800',
              h: '800',
              q: '80'
            }"
          />
        </div>
        <p :class="$style.subtitle" v-if="translations.subtitle">{{ translations.subtitle }}</p>
        <h3 :class="$style.title" v-if="translations.title">{{ translations.title }}</h3>
        <button @click.prevent="toggleFlip" :class="$style.plus" aria-label="plus">
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
            <path d="M5.526 0.729999H3.438V3.664H0.576V5.752H3.438V8.542H5.526V5.752H8.388V3.664H5.526V0.729999Z" fill="#1E1E1E"/>
          </svg>
        </button>
      </div>
      <div :class="$style.back">
        <ul v-if="translations.list && translations.list.items.length">
          <li
            v-for="item in translations.list.items"
            :key="item._key"
          >
            <h4 v-if="item.label">{{ item.label }}</h4>
            <p v-if="item.content">{{ item.content }}</p>
          </li>
        </ul>
        <button @click.prevent="toggleFlip" :class="$style.return" aria-label="return">
          <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 8.5L0 4.5L4 0.5L4.7125 1.2L1.9125 4H8V5H1.9125L4.7125 7.8L4 8.5Z" fill="white"/>
          </svg>
        </button>
      </div>
    </div>
  </li>
</template>

<script>
import project from '../studio/schemas/documents/project';

export default {
  props: {
      project: {
          type: Object,
          required: true
      }
  },

  data() {
    return {
      flipped: false
    }
  },

  computed: {
    translations() {
      if (project) {
        return this.project.translations[this.$i18n.locale]
      } else {
        return {}
      }
    }
  },

  methods: {
    toggleFlip() {
      this.flipped = !this.flipped
    }
  }
}
</script>

<style module lang="postcss">
.card {
  @apply w-[240px]
    h-[240px]
    relative;

  flex: 0 0 auto;
}

.front {
  @apply p-[10px];

  background: #F2F2F2;
}
.background {
  @apply relative
    w-full
    mb-[10px];

  padding-bottom: 60%;

  & img {
    @apply absolute
      top-0
      left-0
      w-full
      h-full
      object-cover;
  }
}

.subtitle {
  @apply text-headline05Mobile
    mb-[10px];
}

.title {
  @apply text-paragraphMobile
    uppercase
    font-black;
}

.plus,
.return {
  @apply absolute
    block
    bottom-[10px]
    right-[10px];
}

.inner {
  @apply 
    w-full
    h-full;

  transition: var(--long-transition);
  transform-style: preserve-3d;

  &.flipped {
    transform: rotateY(180deg);
  }
}

.front,
.back {
  @apply w-full
    h-full
    absolute;

  backface-visibility: hidden;
}

.back {
  @apply bg-dark
    text-light
    p-[10px];

  transform: rotateY(180deg);

  & h4 {
    @apply text-[12px]
      leading-[10.8px]
      uppercase
      font-black
      mb-[6px];
  }

  & p {
    @apply text-[16px]
      leading-[14.4px]
      mb-[6px];
  }
}
</style>