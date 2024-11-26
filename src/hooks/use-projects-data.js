import { graphql, useStaticQuery } from "gatsby"

export const useProjectsData = () => {
  const data = useStaticQuery(graphql`
    query getProjectsData {
      allMarkdownRemark(filter: {frontmatter: {category: {eq: "Projects"}}}) {
        nodes {
          frontmatter {
            image {
              childImageSharp {
                id
                gatsbyImageData(width: 370)
              }
            }
            imageAltText
            title
            slug
          }
        }
      }
    }
  `)

  return data.allMarkdownRemark.nodes
}