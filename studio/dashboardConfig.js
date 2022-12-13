export default {
  widgets: [
    {
      name: 'project-info'
    },
    {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'Adat Studio Website',
            apiId: 'b617f720-7c04-403d-b47a-af81cc331a0b',
            buildHookId: '6389d068c792c362913261be',
            name: 'adatstudio',
            url: 'https://adatstudio.netlify.app',
          }
        ]
      }
    },
    {
      name: 'project-users'
    }
  ]
}
