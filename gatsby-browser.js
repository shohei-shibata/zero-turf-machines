import * as React from "react"
import Layout from "./src/components/layout"
import "./src/styles/reset.css"
import "./src/styles/variables.css"
import "./src/styles/global.css"

export const wrapRootElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}