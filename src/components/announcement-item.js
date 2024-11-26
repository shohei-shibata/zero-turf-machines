import React, { useState } from "react"
import { container, headingWrapper, mainTextWrapper, btnSmall, hidden } from "./announcement-item.module.css"

const formatDate = (dateString) => {
  return Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: "GMT"
  }).format(new Date(dateString))
}

const AnnouncementItem = ({item}) => {
  const hasExcerpt = item.excerpt.at(-1) === "…"
  const [ showFullText, setShowFullText ] = useState(!hasExcerpt)
  const formattedDate = formatDate(item.frontmatter.publishedAt)
  function toggleFullText() {
    setShowFullText(!showFullText)
  }
  return (
    <div className={container}>
      <div className={headingWrapper}>
        <h1>{item.frontmatter.title}</h1>
        <p>{formattedDate}</p>
      </div>
      <div className={mainTextWrapper}>
        <div className={ showFullText && hidden } dangerouslySetInnerHTML={{__html: item.excerpt}}/>
        <div className={ !showFullText && hidden } dangerouslySetInnerHTML={{__html: item.html}}/>
        <button 
          className={`btn ${btnSmall} ${!hasExcerpt && hidden}`}
          onClick={toggleFullText}
        >
          {
            showFullText ?
            "Show Less" : "Read More"
          }
        </button>
      </div>
    </div>
  )
}

export default AnnouncementItem