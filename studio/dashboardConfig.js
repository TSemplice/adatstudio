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
            apiId: '2247cc81-83e9-4554-9f06-2eb3cf5fe151',
            buildHookId: '6399ba97d65beb4cb110ee3e',
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
