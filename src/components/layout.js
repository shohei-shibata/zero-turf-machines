import * as React from 'react'
import Footer from './footer'
import { Header } from './header'
import MobileNavigation from './navigation-mobile'

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <main id="page-top">
        {children}
      </main>
      <Footer/>
      <MobileNavigation/>
    </>
  )
}

export default Layout

export const Head = () => (
  <>
    <title>JKV ENGINEERING</title>
  </>
)
