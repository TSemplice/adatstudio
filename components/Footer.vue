<template>
  <!-- v-if="!$fetchState.pending && footer && $route.path !== `/${$i18n.locale}/menu`" -->
  <footer
    :class="$style.footer"
    v-if="!$fetchState.pending && nav"
  >
    <p v-if="nav.settings && nav.settings.copyright">{{ nav.settings.copyright }}</p>
    <ul :class="$style.list">
      <li
        v-for="item in items"
        :key="item._key"
      >
        <SanityCta v-bind="item.cta" />
      </li>
    </ul>
  </footer>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

export default {
  data() {
    return {
      nav: null,
      lastScrollTop: 0,
      isHidden: false
    }
  },

  async fetch() {
    const query = groq`(*[_type == "menu" && slug.current == "header-nav"])[0] {
      ...,
      "settings": *[_type == "settings"][0],
      translations {
        ${this.$i18n.locale} {
          items[] {
            ...,
            cta {
              ...,
              internal -> {
                _type,
                slug
              }
            },
            items[] {
              ...,
              cta {
                ...,
                internal -> {
                  _type,
                  image,
                  slug
                }
              }
            }
          }
        }
      }
    }`

    const nav = await this.$sanity.fetch(query)
    this.nav = nav
  },

  computed: {
    items() {
      if (this.nav) {
        return this.$localize(this.nav.translations, 'items')
      } else {
        return []
      }
    }
  },

  mounted() {
    if (this.$preview && this.$preview.isPreview) {
      this.$fetch()
    }
  }
}
</script>

<style module lang="postcss">
.footer {
  @apply p-9
    lg:p-0
    lg:fixed
    lg:left-12
    lg:bottom-16;

  & > p {
    @apply text-paragraphMobile
      uppercase
      hidden
      lg:block;
  }
}

.list {
  @apply flex
    flex-col
    gap-3
    lg:hidden;

  & a {
    @apply text-headline02
      uppercase
      font-black;
    
    &:global(.nuxt-link-exact-active) {
      @apply hidden;
    }

    transition: var(--long-transition);
  }
}
</style>
