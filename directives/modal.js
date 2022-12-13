import { createFocusTrap } from 'focus-trap'
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock'

let focusTrap = null

const untrap = (el, bindings) => {
  focusTrap && focusTrap.deactivate()
  focusTrap = null

  enableBodyScroll(el)
  document.removeEventListener('keydown', bindings.__kdCb)
}

const trap = (el, bindings) => {
  bindings.__kdCb = (e) => {
    if (e.key === 'Escape') {
      handleEsc()
    }
  }

  const handleEsc = () => {
    bindings.value.handleEsc && bindings.value.handleEsc()
  }

  if (bindings.value.open) {
    const { initialFocus } = bindings.value

    focusTrap = createFocusTrap(el, {
      initialFocus,
      fallbackFocus: el,
      allowOutsideClick: true
    })

    focusTrap.activate()
    disableBodyScroll(el)
    document.addEventListener('keydown', bindings.__kdCb)
  } else {
    untrap(el, bindings)
  }
}

export default {
  isFn: true,

  bind(el, bindings) {
    trap(el, bindings)
  },

  componentUpdated(el, bindings) {
    trap(el, bindings)
  },

  unbind(el, bindings) {
    untrap(el, bindings)
  }
}
