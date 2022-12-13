import Vue from 'vue'

export default ({ store, app }, inject) => {
  const localize = Vue.filter('localize', (value, field, fallback = '') => {
    const localized =
      value && (value[app.i18n.locale] || value[app.i18n.defaultLocale])

    return (localized && localized[field]) || fallback
  })

  inject('localize', localize)
}
