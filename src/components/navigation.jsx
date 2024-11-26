import { Link } from "gatsby"
import * as React from "react"
import { navStyle, navLink, activeLink } from "./navigation.module.css"

export function Navigation({ className }) {

  return (
    <nav className={[navStyle, className].join(" ")}>
      <Link
        key="About"
        className={navLink}
        to="/about/"
        activeClassName={activeLink}
      >
        About
      </Link>
      <Link
        key="Projects"
        className={navLink}
        to="/projects/"
        activeClassName={activeLink}
      >
        Projects
      </Link>
      <Link
        key="Team"
        className={navLink}
        to="/team/"
        activeClassName={activeLink}
      >
        Our Team
      </Link>
      <Link
        key="Contact"
        className={navLink}
        to="/contact/"
        activeClassName={activeLink}
      >
        Contact
      </Link>
      <a
        key="JKV-Shop"
        className={navLink}
        href="https://shop.jkvengineering.com"
        activeClassName={activeLink}
      >
        JKV Shop
      </a>
    </nav>
  )
}
