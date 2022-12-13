<template>
  <header
    ref="header"
    v-if="!$fetchState.pending && nav"
    :class="[
      $style.header,
      {
        [$style.transparent]: isHome,
        [$style.isHidden]: isHidden || !isMounted,
        [$style.scrolled]: $store.state.scroll.scroll.direction === 'down' && $store.state.scroll.scroll.y > 0 || !isMounted
      }
    ]"
    v-viewport.initial="{ handleResize }"
  >
    <nuxt-link
      :to="localePath('/')"
      :class="$style.logo"
      aria-label="Homepage link"
    >
      <Logo data-main-logo/>
    </nuxt-link>
    <ul :class="$style.list">
      <li
        v-for="item in items"
        :key="item._key"
      >
        <SanityCta v-bind="item.cta" />
      </li>
    </ul>
      <!-- <Hamburger /> -->
    <!-- <MenuMobile
      v-if="items"
      :items="items"
    /> -->
  </header>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

export default {
  props: {
    isMounted: {
      type: Boolean,
      default: false
    }
  },

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
    },

    isHome() {
      return this.$nuxt.$route.name === `index___${this.$i18n.locale}`
    }
  },

  mounted() {
    // window.addEventListener('scroll', this.handleScroll)
    if (this.$preview && this.$preview.isPreview) {
      this.$fetch()
    }
  },

  methods: {
    toggleSub(key) {
      this.$store.commit('menu/TOGGLE_SUB', key)
    },

    handleScroll(e) {
      var st = window.pageYOffset || document.documentElement.scrollTop
      if (st > this.lastScrollTop){
          if(!this.isHidden) {
            this.isHidden = true
          }
      } else {
          if (this.isHidden) {
            this.isHidden = false
          }
      }

      this.lastScrollTop = st <= 0 ? 0 : st
    },

    handleResize() {
      const { height } = this.$refs.header.getBoundingClientRect()

      if (height > 0) {
        document.documentElement.style.setProperty('--header-h', `${height}px`)
      }
    }
  }
}
</script>

<style module lang="postcss">
.header {
  @apply fixed
    flex
    justify-between
    right-0
    w-full
    px-12
    z-header
    bottom-0
    lg:bottom-auto
    lg:top-0;

  transition: var(--medium-transition);

  &.scrolled {
    transform: translate3d(0, 100%, 0);

    @screen lg {
      transform: translate3d(0, -100%, 0);
    }
  }
}

.list {
  @apply flex
    gap-14;

  & a {
    @apply relative
      text-headline03
      font-black
      uppercase;

    &::before {
      @apply w-full
        block
        bg-dark
        h-4
        mb-3;

      content: '';
      transition: var(--medium-transition);
      transform-origin: left center;
      transform: scaleX(0);
    }

    &:global(.nuxt-link-exact-active) {
      &::before {
        transform: scaleX(1);
      }
    }
  }
}

.logo {
  @apply mt-3;
}
</style>
