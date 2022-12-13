import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
  attempt: 1,
  observer: true,
  observerOptions: {
    threshold: 0,
  }
})
