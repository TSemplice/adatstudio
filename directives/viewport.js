import _debounce from 'lodash.debounce'
import { getWindow } from 'ssr-window'

export default {
  isFn: true,

  bind(el, binding) {
    const window = getWindow()
    const { handleResize, debounce = 200 } = binding.value
    const { initial } = binding.modifiers

    binding.__vpCb = _debounce((e) => {
      handleResize(window.innerWidth, window.innerHeight, e)
    }, debounce)

    if (initial) {
      handleResize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', binding.__vpCb)
  },

  unbind(el, binding) {
    window.removeEventListener('resize', binding.__vpCb)
  }
}
