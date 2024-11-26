import React, { useState } from "react"
import { MenuButton } from "./menu-button"
import { 
  mobileMenuContainer, 
  mobileNavContainer,
  mobileNavOpen
} from "./navigation-mobile.module.css"
import { Link } from "gatsby"

const MobileMenu = ({toggleMenu}) => {
  return (
    <div
      className={mobileMenuContainer}
    >
      <ul>
        <li>
          <Link
            to="/"
            onClick={toggleMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={toggleMenu}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            onClick={toggleMenu}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/team"
            onClick={toggleMenu}
          >
            Our Team
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </li>
        <li>
          <a
            href="https://shop.jkvengineering.com"
          >
            JKV Shop
          </a>
        </li>
      </ul>
    </div>
  )
}

export default function MobileNavigation() {
  const [ showNav, setShowNav ] = useState(false)
  const handleMenuToggle = () => {
    setShowNav(!showNav)
  }
  return (
    <div className={`${mobileNavContainer} ${ showNav && mobileNavOpen }`}>
      <MenuButton open={showNav} onMenuToggle={handleMenuToggle}/>
      <MobileMenu toggleMenu={handleMenuToggle}/>
    </div>
  )
}