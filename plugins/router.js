export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    if (app.store.state.menu.isOpen) {
      app.store.commit('menu/TOGGLE_MENU')
    }

    next()
  })
}
