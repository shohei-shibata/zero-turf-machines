import { graphql, useStaticQuery } from "gatsby"

export const useServicesData = () => {
  const data = useStaticQuery(graphql`
    query getServicesData {
      allMarkdownRemark(
        filter: {frontmatter: {category: {eq: "Services"}}}
        sort: {frontmatter: {order: ASC}}
      ) {
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
            url
          }
        }
      }
    }
  `)

  return data.allMarkdownRemark.nodes
}