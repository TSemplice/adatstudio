export const byId = id => document.getElementById(id)

export const byClassName = (selector, ctx = document) => {
  Array.toArray(ctx.getElementsByClassName(selector))
}

export const qs = (selector, ctx = document) => ctx.querySelector(selector)

export const qsa = (selector, ctx = document) => Array.from(ctx.querySelectorAll(selector))

export const data = (attr, ctx) => ctx.hasAttribute('data-' + attr) ? ctx.getAttribute('data-' + attr) : ''

// export const toggleClass = (el, className, toggle) => {
//   const fn = toggle === undefined ? 'toggle' : (toggle ? 'add' : 'remove') // eslint-disable-line no-nested-ternary
//   classie[fn](el, className)
// }

export const addClass = (el, className) => { el.classList.add(className) }

export const removeClass = (el, className) => { el.classList.remove(el, className) }

export const toNodeList = elements => new NodeList(elements)

export function handleEvent(eventName, {
  onElement,
  withCallback,
  useCapture = false
} = {}, thisArg) {
  const element = onElement || document.documentElement

  function handler(event) {
    if (typeof withCallback === 'function') {
      withCallback.call(thisArg, event)
    }
  }

  handler.destroy = function destroy() {
    return element.removeEventListener(eventName, handler, useCapture)
  }

  element.addEventListener(eventName, handler, useCapture)
  return handler
}

export function createconfig(o = {}, config) {
  return Object.assign({}, config, o)
}

export const stringToDOM = (string = '') => {
  const fragment = document.createDocumentFragment()
  const wrapper = fragment.appendChild(document.createElement('div'))

  wrapper.innerHTML = string.trim()
  return wrapper.children[0]
}

export function index(element) {
  const sib = element.parentNode.childNodes
  let n = 0

  for (let i = 0; i < sib.length; i += 1) {
    if (sib[i] === element) { return n }
    if (sib[i].nodeType === 1) { n += 1 }
  }

  return -1
}

export function flatten(list) {
  return list.reduce(
    (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
  )
}

export function eq(parent, i) {
  return (i >= 0 && i < parent.length) ? parent[i] : -1
}

export function inViewport(element) {
  const rect = element.getBoundingClientRect()
  const html = document.documentElement

  return (rect.top >= 0 && rect.top < html.clientHeight) ||
    (rect.bottom >= 0 && rect.bottom < html.clientHeight)
}

export function getDevice() {
  let device = window.getComputedStyle(document.body, '::after').getPropertyValue('content')
  device = device.replace(/('|")/g, '')

  return device
}

export function isMobile() {
  if (process.client) {
    return !(getDevice() !== 'xs' && getDevice() !== 'sm')
  }
}

export function calculateRatio(width, height) {
  return width / height
}

// export function lerp (a, b, n) {
//   return ((1 - n) * a) + (n * b)
// }

export function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end
}

export const isTouch = () => (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0))

export function degrees(radians) {
  return (radians * 180) / Math.PI
}

export function radians(degrees) {
  return (degrees * Math.PI) / 180
}

// export function getQueryParams (qs) {
//   const qss = qs.split('+').join(' ')
//   const params = {}
//   let tokens
//   const re = /[?&]?([^=]+)=([^&]*)/g

//   while (tokens = re.exec(qss)) {
//     params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2])
//   }

//   return params
// }

export function compare(a, b) {
  if (a.order < b.order) {
    return -1
  }

  if (a.order > b.order) {
    return 1
  }

  return 0
}

export function dec(num, dec = 2) {
  const calcDec = 10 ** dec
  return Math.trunc(num * calcDec) / calcDec
}

export function preloadImage(url) {
  return new Promise((resolve) => {
    const image = new Image()
    image.src = url
    image.onload = () => {
      resolve()
    }
  })
}

export function random(min, max) {
  return Math.random() * (max - min) + min
}

export function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max)
}

export function normalize(val, max, min) {
  return Math.max(0, Math.min(1, (val - min) / (max - min)))
}

export function normalizeBetweenTwoRanges(val, minVal, maxVal, newMin, newMax) {
  return newMin + ((val - minVal) * (newMax - newMin)) / (maxVal - minVal)
}

export function setCookie(cname, cvalue, exdays) {
  const d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  const expires = 'expires=' + d.toUTCString()
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}

export function getCookie(cname) {
  const name = cname + '='
  const decodedCookie = decodeURIComponent(document.cookie)
  const ca = decodedCookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

export function getFormattedPrice(price, currency) {
  const formatter = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency
  })

  return formatter.format(price)
}
