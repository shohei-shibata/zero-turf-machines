import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as equipmentStyle from "./equipment-list.module.css"
import { useEquipmentData } from "../hooks/use-equipment-data"

const EquipmentPattern = ({equipment, index}) => {
  if (index % 2 === 0) {
    return (
      <div>
        <div className={equipmentStyle.photoTitleWrapperA} id={`${equipment.frontmatter.slug}`}>
          <GatsbyImage image={getImage(equipment.frontmatter.image)}/>
          <div className={equipmentStyle.nameAndTitle} style={{textAlign:"left"}}>
            <h2 className="heading-font">{equipment.frontmatter.name}</h2>
            <h3>{equipment.frontmatter.model}</h3>
          </div>
        </div>
          <div dangerouslySetInnerHTML={{__html: equipment.html}}/>
      </div>
    )
  }
  return (
    <div>
      <div className={equipmentStyle.photoTitleWrapperB} id={`${equipment.frontmatter.slug}`}>
        <div className={equipmentStyle.nameAndTitle} style={{textAlign:"right"}}>
          <h2 className="heading-font">{equipment.frontmatter.name}</h2>
          <h3>{equipment.frontmatter.position}</h3>
        </div>
        <GatsbyImage image={getImage(equipment.frontmatter.image)}/>
      </div>
      <div dangerouslySetInnerHTML={{__html: equipment.html}}/>
    </div>
  )
}

const EquipmentList = () => {
  const equipmentList = useEquipmentData()
  return (
    <>
      <div className="content-wrapper-default-width">
        <div className={equipmentStyle.galleryWrapper}>
          {equipmentList.map((equipment, index) => (
            <EquipmentPattern equipment={equipment} index={index}/>
          ))}
        </div>
      </div>
    </>
  )
}
export default EquipmentList