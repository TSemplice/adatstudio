export const state = () => ({
  isOpen: false,
  activeSub: ''
})

export const mutations = {
  TOGGLE_SUB (state, key) {
    if (key === state.activeSub || !key) {
      state.activeSub = ''
    } else {
      state.activeSub = key
    }
  },

  TOGGLE_MENU (state, bool) {
    if (bool === true || bool === false) {
      state.isOpen = !state.isOpen
    } else {
      state.isOpen = bool
    }
  }
}
