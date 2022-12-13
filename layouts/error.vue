<template>
  <section :class="$style.error">
    <div :class="$style.content">
      <p>404</p>
      <h1>{{ $t('page_not_found') }}</h1>
      <p>{{ $t('link_corrupted') }}</p>
      <p>{{ $t('or') }}</p>
      <nuxt-link :to="localePath('/')">{{ $t('back_home') }}</nuxt-link>
    </div>
  </section>
</template>

<style module lang="postcss">
.error {
  @apply w-full
    flex
    justify-center
    items-center;

  height: calc(var(--vh, 1vh) * 100);
}

.content {
  @apply px-[16px];
  text-align: center;

  & > p:first-of-type {
    @apply mb-[16px];

    font-size: 80px;
    line-height: 80px;

    letter-spacing: 0.06em;
  }

  & h1 {
    @apply text-headline02
      mb-[16px];

    letter-spacing: 0.06em;
  }

  & > p:nth-of-type(2),
  & > p:last-of-type {
    @apply font-medium
      text-paragraph;

    letter-spacing: 0.06em;
  }

  & a {
    @apply font-bold
      text-paragraph
      mt-[32px]
      inline-block
      uppercase;

    letter-spacing: 0.08v
    em;
    transition: var(--medium-transition);

    :global(.no-touchevents) &:hover {
      @apply opacity-60;

      &.logoLink {
        @apply opacity-100;
      }
    }

    &:global(.nuxt-link-exact-active) {
      @apply opacity-60
        pointer-events-none;

      &.logoLink {
        @apply opacity-100;
      }
    }
  }
}
</style>
