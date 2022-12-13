<template>
  <!-- v-if="!$fetchState.pending && footer && $route.path !== `/${$i18n.locale}/menu`" -->
  <footer
    :class="$style.footer"
  >
    <p>©adat2022</p>
  </footer>
</template>

<style module lang="postcss">
.footer {
  @apply fixed
    left-12
    bottom-16;

  & p {
    @apply text-paragraph
      uppercase;
  }
}
</style>
