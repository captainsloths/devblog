const path = require(`path`)
const { graphql } = require("gatsby")
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `blog` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    //graphql function call returns a promise
    const result = await graphql(`
    query MyQuery {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
    console.log(JSON.stringify(result, null, 4))

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
                //Data passed to context is available in page queries as GraphQL variables
                slug: node.fields.slug,
            }
        })
    })
}