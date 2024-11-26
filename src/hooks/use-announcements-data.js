import { graphql, useStaticQuery } from "gatsby"

export const useAnnouncementsData = () => {
  const data = useStaticQuery(graphql`
    query getAnnouncementsData {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            category: {
              eq: "Announcements"
              }
            }
        }
        limit: 3
      ) {
        nodes {
          html
          excerpt(pruneLength: 200)
          frontmatter {
            title
            imageAltText
            publishedAt
            image {
              childImageSharp {
                id
                gatsbyImageData(width: 370)
              }
            }
          }
        }
      }
    }
  `)

  console.log("hook", data)

  return data.allMarkdownRemark.nodes
}