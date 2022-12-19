<template>
  <section>
    <SanityContent
      :class="$style.text"
      v-if="data.text"
      :blocks="data.text"
    />
  </section>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style module lang="postcss">
.text {
  @apply py-[18px]
    lg:py-[80px]
    lg:w-1/2
    lg:ml-auto;

  & h1 {
    @apply text-headline01Mobile
      lg:text-headline01
      uppercase
      font-black
      mb-2;
  }

  & h2 {
    @apply text-headline02Mobile
      lg:text-headline02
      uppercase
      font-black
      mb-2;
  }

  & h3 {
    @apply text-headline03Mobile
      lg:text-headline03
      uppercase
      font-black
      mb-2;
  }

  & h4 {
    @apply text-headline04Mobile
      lg:text-headline04
      font-black
      mb-2;
  }

  & h5 {
    @apply text-headline05Mobile
      lg:text-headline05
      uppercase
      mb-2;
  }

  & p,
  & li {
    @apply text-paragraphMobile
      lg:text-paragraph;
  }

  & p:empty {
    @apply pb-6;
  }

  & ul {
    @apply pl-6
      lg:pl-8;

    list-style: unset;
  }
}
</style>