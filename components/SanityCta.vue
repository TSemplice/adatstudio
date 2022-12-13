<template>
  <!-- eslint-disable vue/require-component-is -->
  <component
    v-bind="ctaProps"
    :class="className"
    v-on="$listeners"
  >
    <slot>
      <p>{{ title }}</p>
      <span v-if="additional.length" data-additional>{{ additional }}</span>
    </slot>
  </component>
</template>

<script>
import isEmpty from 'lodash.isempty'

export default {
  inheritAttrs: false,

  props: {
    /* eslint-disable vue/prop-name-casing */
    _type: {
      type: String,
      default: ''
    },

    resource: {
      type: Object,
      default() {
        return {}
      }
    },

    internal: {
      type: Object,
      default() {
        return {}
      }
    },

    title: {
      type: String,
      default() {
        return ''
      }
    },

    external: {
      type: String,
      default: null
    },

    className: {
      type: [String, Object, Array],
      default: ''
    },

    event: {
      type: [String, Array],
      default: 'click'
    },

    additional: {
      type: String,
      default: ''
    }
  },

  computed: {
    url() {
      if (this.external) {
        return this.external
      }

      if (!this.internal || isEmpty(this.internal)) {
        return '/'
      }

      switch (this.internal._type) {
        case 'page':
          const link = this.internal.slug.current === 'homepage' ? '' : this.internal.slug.current
          return `${this.localePath(`/${link}`)}`
        // case 'category':
        // return `${this.localePath(`/menu/${this.internal.slug.current}`)}`
        // case 'journal':
        // return `${this.localePath(`/journal/${this.internal.slug.current}`)}`
        default:
          return '/'
      }
    },

    ctaProps() {
      if (this.external) {
        return {
          is: 'a',
          target: '_blank',
          href: this.external,
          rel: 'noopener'
        }
      } else if (!isEmpty(this.internal)) {
        return {
          is: 'nuxt-link',
          to: this.url,
          event: this.event,
          ['data-label']: this.title
        }
      } else if (!isEmpty(this.resource)) {
        return {
          is: 'a',
          target: '_blank',
          href: this.resource.translations[this.$i18n.locale].resource.asset.url,
          rel: 'noopener'
        }
      } else {
        return {
          is: 'span'
        }
      }
    }
  }
}
</script>
