export const state = () => ({
  scroll: {
    isScrolling: false,
    limit: {
      x: 0,
      y: 0,
    },
    x: 0,
    y: 0,
    direction: 'up'
  },
})

export const mutations = {
  setScroll: (state, payload) => {
    state.scroll = Object.assign({}, state.scroll, payload)
  },

  resetDirection: (state) => {
    state.scroll.direction = 'up'

    console.log(state.scroll.direction)
  }
}
