import React from "react"
import { Section } from "../components/section"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"
import * as projectStyle from "./project.module.css"
import { Link } from "gatsby"
import Seo from "../components/seo"

export const Head = ({pageContext}) => {
  const { image } = pageContext
  const imageSrc = getSrc(image)
  return (
    <Seo 
      title={pageContext.title} 
      image={imageSrc}
    />
  )
}

const ProjectPageTemplate = ({pageContext}) => {
  const { title, content, image, imageAltText } = pageContext
  return (
    <>
        <Section title="Projects">
          <div className={`center-content ${projectStyle.featuredImage}`}>
            <GatsbyImage image={getImage(image)} alt={imageAltText} />
            <h1 className={projectStyle.postTitle}>{title}</h1>
          </div>
          <div dangerouslySetInnerHTML={{ __html: content }} className="text-section-narrow-width" />
        </Section>
        <div className="btn-multiple-wrapper">
          <Link to="/" className="btn btn-yellow">Back to Home</Link>
          <Link to="/projects" className="btn btn-yellow">View Other Projects</Link>
        </div>
    </>
  )
}

export default ProjectPageTemplate