import React from "react"
import * as contactFormStyles from "./contact-form.module.css"

const ContactForm = () => {
  return (
    <form 
      id="contact-form" 
      method='post' 
      className={contactFormStyles.form} 
      name='contact-form'
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/success"
    >
      <input type='hidden' name='form-name' value='contact-form' />
      <label htmlFor="bot-field" className={contactFormStyles.label} hidden>
        Don't fill this out
        <input name="bot-field" type="text"/>
      </label>
      <label htmlFor="name" className={contactFormStyles.label}>
        Name
        <input name="name" type="text" required/>
      </label>
      <label htmlFor="email" className={contactFormStyles.label}>
        Email
        <input name="email" type="email" required/>
      </label>
      <label htmlFor="message" className={contactFormStyles.label}>
        Message
        <textarea name="message" rows="10" required/>
      </label>
      <input 
        type="submit"
        className={`btn btn-yellow ${contactFormStyles.submitButton}`}
        value="Submit"
      />
    </form>
  )
}

export default ContactForm