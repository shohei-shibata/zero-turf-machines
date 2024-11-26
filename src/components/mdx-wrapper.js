import React from "react"
import { Section } from "./section"

const MdxWrapper = ({children, title}) => {
  return (
    <div className="content-wrapper-default-width page-content-wrapper">
      <Section title={title}>
        <div className="text-section-narrow-width">
          {children}
        </div>
      </Section>
    </div>
  )
}

export default MdxWrapper
