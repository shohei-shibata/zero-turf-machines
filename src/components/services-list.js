import React from "react"
import * as servicesStyle from "./services-list.module.css"
import ImageOverlay from "./image-overlay"
import { Link } from "gatsby"
import { useServicesData } from "../hooks/use-services-data"

const Services = () => {
  const services = useServicesData()
  return (
  <>
    <div className="content-wrapper-default-width">
      <div className={servicesStyle.galleryWrapper}>
        {services.map((item, index) => (
          <Link to={item.frontmatter.url} key={`about-item-${index+1}`}>
            <ImageOverlay
              image={item.frontmatter.image}
              altText={item.frontmatter.imageAltText}
              text={item.frontmatter.title}
              small
            />
          </Link>
        ))}
      </div>
      <div className="center-content btn-wrapper">
        <Link to="/about" className="btn btn-yellow">Read More</Link>
      </div>
    </div>
  </>
)}

export default Services