<template>
  <li :class="$style.card">
    <div :class="[
      $style.inner,
      {
        [$style.flipped]: flipped
      }
    ]"
    @click.prevent="toggleFlip"
    >
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
        <button :class="$style.plus" aria-label="plus">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M7.60369 0H4.39631V4.50691H0V7.71429H4.39631V12H7.60369V7.71429H12V4.50691H7.60369V0Z" fill="#1E1E1E"/>
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
        <button :class="$style.return" aria-label="return">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M6.89393 13.1061L6.99907 13.2112L7.10512 13.107L8.17387 12.057L8.28183 11.9509L8.17482 11.8439L4.23088 7.9H13H13.15V7.75V6.25V6.1H13H4.23088L8.17482 2.15607L8.28183 2.04906L8.17387 1.943L7.10512 0.893L6.99907 0.788802L6.89393 0.893934L0.893934 6.89393L0.787868 7L0.893934 7.10607L6.89393 13.1061Z" fill="white" stroke="white" stroke-width="0.3"/>
          </svg>
        </button>
      </div>
    </div>
  </li>
</template>

<script>
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
      if (this.project) {
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

  @screen lg {
    width: calc((100vw - 96px) / 2.77);
    height: calc((100vw - 96px) / 2.77);
  }
}

.front {
  @apply p-[10px]
    lg:p-6;

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
  @apply text-[10px]
    leading-[14px]
    lg:text-headline05Mobile
    mb-[10px];
}

.title {
  @apply text-headline03Mobile
    uppercase
    font-black
    max-w-[200px]
    lg:text-headline03
    lg:max-w-[300px];
}

.plus,
.return {
  @apply absolute
    block
    bottom-[10px]
    right-[10px]
    lg:bottom-6
    lg:right-6;
}

.inner {
  @apply 
    w-full
    h-full
    cursor-pointer;

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
    p-[10px]
    lg:p-6;

  transform: rotateY(180deg);

  & h4 {
    @apply text-[10px]
      leading-[9px]
      lg:text-[14px]
      lg:leading-[12px]
      uppercase
      font-black
      mb-[6px];
  }

  & p {
    @apply text-headline03Mobile
      lg:text-[20px]
      lg:leading-[18px]
      mb-[6px];
  }

  & ul {
    @apply flex
      flex-col
      gap-2
      lg:gap-3;
  }
}
</style>