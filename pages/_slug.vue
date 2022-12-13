<template>
  <ComponentWrapper
    :components="components"
    padded
    noh
  />
</template>

<script>
import { groq } from '@nuxtjs/sanity'
import head from '~/mixins/head'
import meta from '~/mixins/meta'
import transition from '~/mixins/transition'
import components from '~/mixins/components'
import { slugContent } from '~/assets/js/queries/slugContent'
import { onlySlug } from '~/assets/js/queries/onlySlug'

export default {
  mixins: [head, meta, components, transition],

  async asyncData({ app, params, error, store }) {
    const { locale } = app.i18n

    const query = groq`(*[_type == "page" && slug.current == "${params.slug}"][0]) {
      ...,
      translations {
        it {
          ${locale === 'it' ? slugContent('it') : onlySlug()}
        },

        en {
          ${locale === 'en' ? slugContent('en') : onlySlug()}
        }
      }
    }`

    try {
      const data = await app.$sanity.fetch(query)

      if (Object.keys(data).length === 0) {
        // eslint-disable-next-line no-throw-literal
        throw 'No page data'
      }

      // const langSlugs = {}

      // for (const key in data.translations) {
      //   langSlugs[key] = { slug: data.translations[key].slug.current }
      // }

      // await store.dispatch('i18n/setRouteParams', langSlugs)

      return {
        ...data
      }
    } catch (ex) {
      error({ statusCode: 404, message: ex.message })
    }
  }
}
</script>

<style module lang="postcss">
.section {
}
</style>
