export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    if (app.store.state.menu.isOpen) {
      app.store.commit('menu/TOGGLE_MENU')
    }

    if (app.store.state.menu.activeSub.length) {
      app.store.commit('menu/TOGGLE_SUB', '')
    }

    next()
  })
}
