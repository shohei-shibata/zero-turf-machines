const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve(`src/templates/project.js`)
  return graphql(`
    query GetAllProjects {
      allMarkdownRemark(filter: {frontmatter: {category: {eq: "Projects"}}}) {
        nodes {
          html
          frontmatter {
            title
            imageAltText
            category
            slug
            image {
              childImageSharp {
                gatsbyImageData(width: 1000)
              }
            }
          }
        }
      }
    }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create project post pages.
    result.data.allMarkdownRemark.nodes.forEach(node => {
      const data = {
        title: node.frontmatter.title,
        content: node.html,
        image: node.frontmatter.image,
        imageAltText: node.frontmatter.imageAltText
      }
      createPage({
        // Path for this page — required
        path: `projects/${node.frontmatter.slug}`,
        component: projectTemplate,
        context: {...data},
      })
    })
  })
}