export default {
  computed: {
    meta() {
      return this.$localize(this.translations, 'meta')
    },

    metaTitle() {
      if (this.meta && this.meta.title) {
        return this.meta.title
      } else {
        return ''
      }
    },

    metaDescription() {
      if (this.meta && this.meta.description) {
        return this.meta.description
      } else {
        return ''
      }
    },

    metaImage() {
      if (this.meta && this.meta.image) {
        return this.meta.image.asset.url
      } else {
        return ''
      }
    }
  }
}
