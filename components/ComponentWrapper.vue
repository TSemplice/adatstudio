<template>
 <main :class="[
    $style.page,
  ]
  ">
  <div :class="$style.content">
    <component
      :is="component._type"
      v-for="(component, i) in components"
      :key="`${component._key}-${i}`"
      :data="component"
    />
  </div>
  <slot />
 </main>
</template>

<script>
export default {
  props: {
    components: {
      type: [Array, Object, String, null],
      default: () => ([])
    },

    padded: {
      type: Boolean,
      default: false
    },

    noh: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style module lang="postcss">
.page {
  @apply pt-[182px]
    lg:pt-[120px];
}

.content {
  @apply px-9
    lg:px-12
    overflow-hidden;
}
</style>
