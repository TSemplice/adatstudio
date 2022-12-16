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
        <div>
          <a v-if="data.instagram" :href="data.instagram" rel="noopener" target="_blank">IG</a>
          <a v-if="data.linkedin" :href="data.linkedin" rel="noopener" target="_blank">IN</a>
        </div>
      </div>
      <div>
        <a v-if="data.privacy" :href="data.privacy" rel="noopener" target="_blank">Privacy Policy</a>
        <a v-if="data.cookies" :href="data.cookies" rel="noopener" target="_blank">Cookies Policy</a>
        <a href="https://semplice.is" rel="noopener" target="_blank">{{ $t('credits') }}</a>
      </div>
      <!-- <p :class="$style.copy">©ADAT STUDIO2022</p> -->
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
  @apply pt-[18px]
    pb-2
    lg:pb-9
    lg:py-20;

  & h1 {
    @apply text-headline02Mobile
      lg:text-headline01
      uppercase
      font-black
      mb-3;
  }

  & > p {
    @apply text-link
      lg:text-paragraph
      mb-9;
  }
}

.email {
  @apply flex
    justify-between
    lg:justify-start
    lg:gap-3;


  & > span {
    @apply uppercase
      font-black;
  }

  & > span,
  & > a {
    @apply text-headline03Mobile
      lg:text-paragraph;
  }

  & a {
    @apply underline
      lg:no-underline	;
  }
}

.links {
  @apply mt-[64px];

  & > div:first-of-type {
    & p {
      @apply text-headline04Mobile
        lg:text-paragraph
        font-bold
        mb-1
        lg:mb-2
        capitalize
        font-black
        lg:font-bold;
    }

    @apply mb-6
      lg:mb-16;

    & div {
      @apply flex
        gap-3;
    }

    & a {
      @apply block
        text-headline04Mobile
        lg:text-paragraph;
    }
  }

  & > div:last-of-type {
    @apply flex
      flex-col
      gap-1
      lg:gap-[10px];

    & a {
      @apply text-paragraphMobile
        capitalize
        font-black
        lg:font-bold
        lg:text-paragraph;
    }
  }
}

.copy {
  @apply text-headline04Mobile
    mt-6
    font-normal
    lg:hidden;
}
</style>