import * as React from "react"
import { 
  sectionContentWrapper,
  sectionTitle,
  sectionTitleHr,
  sectionContent,
  darkSection,
  yellowSection,
  fullWidthSection
} from "./section.module.css"

export function Section({id, title, children, dark, yellow, fullWidth}) {
  const classArray = [
    dark ? darkSection : "",
    yellow ? yellowSection : "",
    fullWidth ? fullWidthSection : ""
  ]
  return (
    <section id={id} className={classArray.join(" ")}>
      <div className={sectionContentWrapper}>
        {title ? 
          <>
            <h1 className={sectionTitle}>{title}</h1>
            <hr className={sectionTitleHr}/>
          </> : null
        }
        <div className={sectionContent}>
          {children}
        </div>
      </div>
    </section>
  )
}