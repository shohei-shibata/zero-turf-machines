import * as React from "react"
import { Link } from "gatsby"
import Slogan from "../components/slogan"
import ServicesList from "../components/services-list"
import ProjectsList from "../components/projects-list"
import Portrait from "../components/portrait"
import Seo from "../components/seo"
import { useTeamData } from "../hooks/use-team-data"
import { useAnnouncementsData } from "../hooks/use-announcements-data"
import GoogleMap from "../components/google-map"
import { Section } from "../components/section"
import AnnouncementItem from "../components/announcement-item"

const IndexPage = () => {
  const team = useTeamData()
  const announcements = useAnnouncementsData()
  return (
    <>
      <Section dark>
        <Slogan />
      </Section>
      <Section id="about" title="Fabrication Services">
        <ServicesList/>
      </Section>
      <Section id="about" title="Engineering Services">
        <ServicesList/>
      </Section>
      <Section id="latest" title="Latest" dark>
        <div className="announcements-list-container">
          {
            announcements.map(item => {
              return (
                <AnnouncementItem item={item}/>
              )
            })
          }
        </div>
      </Section>
      <Section id="section-cta-contact" yellow>
        <div className="content-wrapper-default-width">
          <h1 className="cta-text">JKV Shop is Now Open!</h1>
          <p className="cta-text">Discount rates on Dakota Lithium batteries, and more coming soon.</p>
          <div className="center-content btn-wrapper">
            <a href="https://shop.jkvengineering.com" className="btn centered">
              Go To JKV Shop
            </a>
          </div>
        </div>
      </Section>
      <Section id="items" title="Recent Projects" dark>
        <ProjectsList/>
      </Section>
      <Section id="our-team" title="Our Team">
        <div className="content-wrapper-default-width">
          <div className="team-portraits-wrapper">
            {team.map((person, index) => (
              <Portrait key={`portrait-${index+1}`} data={person.frontmatter}/>
            ))}
          </div>
        </div>
      </Section>
      <Section id="contact-us" title="How to Reach Us" dark>
        <div className="content-wrapper-default-width">
          <div className="contact-row-1-container">
            <div className="contact-address">
              <h3>JKV ENGINEERING</h3>
              <h3>789 U.S. 50</h3>
              <h3>Milford, OH 45150</h3>
              <br/>
              <Link to="/contact#contact-form" className="btn btn-yellow">Send Us a Message</Link>
            </div>
            <GoogleMap/>
          </div>
        </div>
      </Section>
    </>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home"/>