import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as teamStyle from "./team-list.module.css"
import { useTeamData } from "../hooks/use-team-data"

const BioPattern = ({person, index}) => {
  const hasFunFacts = person.frontmatter.funFacts
  if (index % 2 === 0) {
    return (
      <div>
        <div className={teamStyle.photoTitleWrapperA} id={`${person.frontmatter.slug}`}>
          <GatsbyImage image={getImage(person.frontmatter.image)}/>
          <div className={teamStyle.nameAndTitle} style={{textAlign:"left"}}>
            <h2 className="heading-font">{person.frontmatter.name}</h2>
            <h3>{person.frontmatter.position}</h3>
          </div>
        </div>
        <div className={`${teamStyle.textWrapperA} ${hasFunFacts ? "" : teamStyle.noFunFacts}`}>
          <div dangerouslySetInnerHTML={{__html: person.html}}/>
          {person.frontmatter.funFacts ? 
            <div className={teamStyle.funFacts}>
              <h3>Fun Facts</h3>
              {person.frontmatter.funFacts.map(fact => (
                <>
                  <h4>Q: {fact.q}</h4>
                  <p>A: {fact.a}</p>
                </>
              ))}
            </div>
            : null
          }
        </div>
      </div>
    )
  }
  return (
    <div>
      <div className={teamStyle.photoTitleWrapperB} id={`${person.frontmatter.slug}`}>
        <div className={teamStyle.nameAndTitle} style={{textAlign:"right"}}>
          <h2 className="heading-font">{person.frontmatter.name}</h2>
          <h3>{person.frontmatter.position}</h3>
        </div>
        <GatsbyImage image={getImage(person.frontmatter.image)}/>
      </div>
      <div className={`${teamStyle.textWrapperB} ${hasFunFacts ? "" : teamStyle.noFunFacts}`}>
        {person.frontmatter.funFacts ? 
          <div className={teamStyle.funFacts}>
            <h3>Fun Facts</h3>
            {person.frontmatter.funFacts.map(fact => (
              <>
                <h4>Q: {fact.q}</h4>
                <p>A: {fact.a}</p>
              </>
            ))}
          </div>
          : null
        }
        <div dangerouslySetInnerHTML={{__html: person.html}}/>
      </div>
    </div>
  )
}

const TeamList = () => {
  const team = useTeamData()
  return (
    <>
      <div className="content-wrapper-default-width">
        <div className={teamStyle.galleryWrapper}>
          {team.map((person, index) => (
            <BioPattern person={person} index={index}/>
          ))}
        </div>
      </div>
    </>
  )
}
export default TeamList