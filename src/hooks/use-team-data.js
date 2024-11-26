import { graphql, useStaticQuery } from "gatsby"

export const useTeamData = () => {
  const data = useStaticQuery(graphql`
    query getTeamData {
      allMarkdownRemark(
        filter: {frontmatter: {category: {eq: "Team"}}}
        sort: {frontmatter: {order: ASC}}
      ) {
        nodes {
          html
          frontmatter {
            image {
              childImageSharp {
                id
                gatsbyImageData(width: 550)
              }
            }
            imageAltText
            slug
            name
            position
            funFacts {
              a
              q
            }
          }
        }
      }
    }
  `)

  return data.allMarkdownRemark.nodes
}