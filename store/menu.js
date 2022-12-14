export const state = () => ({
  isOpen: false
})

export const mutations = {
  TOGGLE_MENU (state, bool) {
    if (bool === true || bool === false) {
      state.isOpen = !state.isOpen
    } else {
      state.isOpen = bool
    }
  }
}
