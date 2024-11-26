import * as React from "react"
import { Link } from "gatsby"
import Logo from "../icons/logo"
import { Navigation } from "./navigation"
import {
  header,
  container,
  logo as logoCss,
  nav,
} from "./header.module.css"

export function Header() {
  return (
    <div className={container}>
      <header className={header}>
        <Link to="/" className={logoCss}>
          <Logo />
        </Link>
        <Navigation className={nav} />
      </header>
    </div>
  )
}
