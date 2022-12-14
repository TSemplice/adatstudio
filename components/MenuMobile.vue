<template>
  <transition
    @enter="menuIn"
    @leave="menuOut"
  >
    <aside
      :class="$style.menu"
      v-show="$store.state.menu.isOpen"
      v-modal="{ open: $store.state.menu.isOpen }"
      ref="menu"
    >
      <ul :class="$style.list">
        <li
          v-for="item in items"
          :key="item._key"
         data-item
        >
          <SanityCta v-bind="item.cta" />
        </li>
      </ul>
      <div :class="$style.footer">
        <div :class="$style.socials" v-if="settings.instagram && settings.linkedin">
          <p data-item>{{ $t('follow_us') }}</p>
          <a data-item v-if="settings.instagram" :href="settings.instagram" rel="noopener" target="_blank">IG</a>
          <a data-item v-if="settings.linkedin" :href="settings.linkedin" rel="noopener" target="_blank">IN</a>
        </div>
        <div :class="$style.legal" v-if="settings.privacy && settings.cookies">
          <a data-item v-if="settings.privacy" :href="settings.privacy" rel="noopener" target="_blank">Privacy Policy</a>
          <a data-item v-if="settings.cookies" :href="settings.cookies" rel="noopener" target="_blank">Cookies Policy</a>
          <a data-item href="https://semplice.is" rel="noopener" target="_blank">{{ $t('credits') }}</a>
        </div>
        <div>
          <p data-item :class="$style.copyright">©adat2022</p>
        </div>
      </div>
    </aside>
  </transition>
</template>

<script>
import gsap, { Power4 } from 'gsap'
import { qsa } from '~/assets/js/utils/generic'

export default {
  props: {
    items: {
      type: Array,
      default: () => ([])
    },

    settings: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      other: null
    }
  },

  methods: {
    menuIn(el, done) {
      const tl = gsap.timeline({ onComplete: done })
      const items = qsa('[data-item]', el)

      tl
        .fromTo(el, {
          autoAlpha: 0
        }, {
          duration: 0.8,
          autoAlpha: 1,
          ease: Power4.easeOut
        })
        .fromTo(items, {
          autoAlpha: 0
        },{
          duration: 0.8,
          autoAlpha: 1,
          stagger: 0.04,
          ease: Power4.easeOut
        }, '-=0.2')
    },

    menuOut(el, done) {
      const tl = gsap.timeline({ onComplete: done })
      const items = qsa('[data-item]', el)

      tl
        .to(items, {
          duration: 0.8,
          autoAlpha: 0,
          stagger: 0.04,
          ease: Power4.easeOut
        })
        .to(el, {
          duration: 0.8,
          autoAlpha: 0,
          ease: Power4.easeOut
        }, '-=0.2')
    }
  }
}
</script>

<style module lang="postcss">
.menu {
  @apply fixed
    top-0
    left-0
    w-full
    h-full
    bg-dark
    px-9
    py-14
    pt-[200px]
    flex
    flex-col
    justify-between
    overflow-auto
    text-light
    lg:hidden
    z-behind;
}

.list {
  @apply flex
    flex-col
    gap-[12px];


  & a {
    @apply text-headline02
      uppercase
      font-black;

    transition: var(--medium-transition);

    &:global(.nuxt-link-exact-active) {
      @apply opacity-40;
    }
  }
}

.footer {
  @apply flex
    flex-col
    gap-6;
}
.socials {
  & p {
    @apply text-headline04Mobile
      font-black
      capitalize
      mb-1;
  }

  & a {
    @apply text-link;
  }
}

.legal {
  @apply flex
    flex-col
    gap-2;

  & a {
    @apply text-headline03Mobile
      font-black
      capitalize;
  }
}

.copyright {
  @apply text-headline04Mobile
    uppercase;
}
</style>
