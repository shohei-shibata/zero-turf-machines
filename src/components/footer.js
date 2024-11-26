import * as React from 'react'
import { Link } from 'gatsby'
import { footer, footerLinks, credits } from './footer.module.css'

const links = [
  {
    name: "Home",
    url: "/"
  },
  {
    name: "About",
    url: "/about"
  },
  {
    name: "Projects",
    url: "/projects"
  },
  {
    name: "Our Team",
    url: "/team"
  },
  {
    name: "Contact Us",
    url: "/contact"
  },
  {
    name: "JKV Shop",
    url: "https://shop.jkvengineering.com"
  },
]

const Footer = () => {
  return (
    <footer className={footer}>        
      <div className={footerLinks}>
        <ul>
          {links.map(link => (
            <li key={link.url}><Link to={link.url}>{link.name}</Link></li>
          ))}
        </ul>
        <ul>
          Check us out on: <a href="https://www.facebook.com/JKVEngineering">Facebook</a>
        </ul>
      </div>
      <div className={credits}>© JKV Engineering 2023</div>
    </footer>
  )
}

export default Footer