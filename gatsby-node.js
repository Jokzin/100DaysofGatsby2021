const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const locationsComponent = path.resolve('./src/templates/location.js')
    resolve(
      graphql(
        `
          {
            allContentfulLocation {
              edges {
                node {
                  city
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const locations = result.data.allContentfulLocation.edges
        locations.forEach((location, index) => {
          createPage({
            path: `/locations/${location.node.slug}/`,
            component: locationsComponent,
            context: {
              slug: location.node.slug
            },
          })
        })
      })
    )
  })
}