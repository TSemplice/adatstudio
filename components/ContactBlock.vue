<template>
  <section :class="$style.contacts">
    <h1 v-if="data.title">{{ data.title }}</h1>
    <p v-if="data.subtitle">{{ data.subtitle }}</p>
    <div v-if="data.email" :class="$style.email">
      <span>M.</span>
      <a :href="`mailto:${data.email}`" rel="noopener">{{ data.email }}</a>
    </div>
    <div :class="$style.links">
      <div>
        <p>{{ $t('follow_us') }}</p>
        <a v-if="data.instagram" :href="data.instagram" rel="noopener" target="_blank">IG</a>
        <a v-if="data.linkedin" :href="data.linkedin" rel="noopener" target="_blank">IN</a>
      </div>
      <div>
        <a v-if="data.privacy" :href="data.privacy" rel="noopener" target="_blank">Privacy Policy</a>
        <a v-if="data.cookies" :href="data.cookies" rel="noopener" target="_blank">Cookies Policy</a>
        <a href="https://semplice.is" rel="noopener" target="_blank">{{ $t('credits') }}</a>
      </div>
    </div>
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
.contacts {
  @apply py-20;

  & h1 {
    @apply text-headline02Mobile
      lg:text-headline02
      uppercase
      font-black
      mb-3;
  }

  & > p {
    @apply text-paragraphMobile
      lg:text-paragraph
      mb-9;
  }
}

.email {
  & > span {
    @apply uppercase
      font-black;
  }
}

.links {
  @apply mt-[184px];

  & p {
    @apply text-paragraphMobile
      text-paragraph
      font-bold
      mb-2
      capitalize;
  }

  & > div:first-of-type {
    @apply mb-[80px];
  }

  & > div:last-of-type {
    @apply flex
      flex-col
      gap-[10px];

    & a {
      @apply font-bold
        capitalize;
    }
  }
}
</style>