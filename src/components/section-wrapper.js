import React from "react"

const SectionRegular = ({ sectionId, children }) => (
  <section id={sectionId} className="section-light">
    {children}
  </section>
)

const SectionDark = ({ sectionId, children }) => (
  <section id={sectionId} className="section-dark">
    {children}
  </section>
)

const SectionYellow = ({ sectionId, children }) => (
  <section id={sectionId} className="section-yellow">
    {children}
  </section>
)

export { SectionRegular, SectionYellow, SectionDark }