import React from "react"
import * as imageOverlayCss from "./image-overlay.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ImageOverlay = ({image, altText, text, small, large}) => {
  const wrapperClassName = `
    ${imageOverlayCss.imageWrapper} 
    ${small ? imageOverlayCss.imageWrapperSmall : ""} 
    ${large ? imageOverlayCss.imageWrapperLarge : ""}
  `
  return (
    <div className={wrapperClassName}>
      <GatsbyImage 
        image={getImage(image)} 
        alt={altText}
        className={imageOverlayCss.image}
      />
      <div className={imageOverlayCss.overlay}>
        <h1>{text}</h1>
      </div>
    </div>
  )
}

export default ImageOverlay