import React from "react"

const SectionTitle = ({children}) => (
  <>
    <h1 
      className="heading-font"
      style={{
      textAlign: "center",
      textTransform: "uppercase"
    }}>
      {children}
    </h1>
    <hr style={{
      width: "250px",
      border: "1.5px solid var(--yellow)",
      marginBottom: "3em"
    }}/>
  </>
)

export default SectionTitle