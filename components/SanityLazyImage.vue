<template>
  <SanityImage :asset-id="asset._ref" v-bind="transformations">
    <template #default="{ src }">
      <img v-if="lazy" :data-src="src" :alt="caption" v-lazy-load>
      <img v-else :src="src" :alt="caption">
    </template>
  </SanityImage>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    asset: {
      type: Object,
      default() {
        return {}
      }
    },
    lazy: {
      type: Boolean,
      default: true
    },
    transformations: {
      type: Object,
      default() {
        return {
          auto: 'format',
          fit: 'max',
          w: '1300',
          h: '1300',
          q: '80'
        }
      }
    },
    caption: {
      type: String,
      default: 'Adat Studio Image'
    }
  }
}
</script>
