export default {
  head() {
    return {
      title: this.metaTitle,
      titleTemplate: '%s | Adat Studio',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.metaDescription
        },
        {
          key: 'serp_title',
          itemprop: 'name',
          content: this.metaTitle
        },
        {
          key: 'serp_description',
          itemprop: 'description',
          content: this.metaDescription
        },
        {
          key: 'serp_image',
          itemprop: 'image',
          content: this.metaImage
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.metaTitle
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.metaDescription
        },
        {
          key: 'og:image',
          property: 'og:image',
          content: this.metaImage
        },
        {
          key: 'twitter_card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          key: 'twitter_title',
          name: 'twitter:title',
          content: this.metaTitle
        },
        {
          key: 'twitter_description',
          name: 'twitter:description',
          content: this.metaDescription
        },
        {
          key: 'twitter_image',
          name: 'twitter:image',
          content: this.metaImage
        }
      ]
    }
  }
}
