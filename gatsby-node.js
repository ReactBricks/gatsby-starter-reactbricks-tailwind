const bluebird = require('bluebird')
const fetchPages = require('react-bricks').fetchPages
const fetchPage = require('react-bricks').fetchPage

const { apiKey, appId } = require('./credentials.config.js')

exports.createPages = async ({ actions: { createPage } }) => {
  if (!apiKey || !appId) {
    console.log(
      'To start you need to create a new React Bricks App at https://reactbricks.com and set the appId and apiKey in the credentials.config.js file.'
    )
    createPage({
      path: `/`,
      component: require.resolve('./src/templates/page.js'),
      context: { page: null },
    })
    return
  }

  const allPages = await fetchPages(apiKey)

  if (!allPages || allPages.length === 0){
    console.log(
      'No published page was found. Please, create at least one page from the /admin interface.'
    )
    createPage({
      path: `/`,
      component: require.resolve('./src/templates/page.js'),
      context: { page: null },
    })
    return
  }

  const allPagesWithContent = await bluebird.map(
    allPages,
    page => {
      return fetchPage(page.slug, apiKey)
    },
    { concurrency: 2 }
  )

  // Home Page
  const homePage = allPagesWithContent.find(page => page.slug === 'home')
  if (homePage) {
    createPage({
      path: `/`,
      component: require.resolve('./src/templates/page.js'),
      context: { page: homePage },
    })
  }

  // Other pages
  allPagesWithContent
    .filter(page => page.slug !== 'home')
    .forEach(page => {
      createPage({
        path: `/${page.slug}/`,
        component: require.resolve('./src/templates/page.js'),
        context: { page },
      })
    })
}
