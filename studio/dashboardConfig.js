export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ee2c64b56089ae18b12d8b7',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-zhd6fhmx',
                  apiId: '88ee5d6e-98a0-4b60-b5c0-c9b21d15272d'
                },
                {
                  buildHookId: '5ee2c64b00c1feb1dc059d85',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-zmq6vo5q',
                  apiId: '0d60709d-20a6-42e6-ba61-9158f83aa4b2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/julioarhernandez/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-zmq6vo5q.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
