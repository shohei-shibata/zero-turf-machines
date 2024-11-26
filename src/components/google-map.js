import React from "react"

const iframeStyle = {
  width: "100%",
  border: "none"
}

const GoogleMap = () => (
  <div>
    <iframe 
      title="google-map" 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1300.5705507545151!2d-84.26534586277937!3d39.16799655108178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8840550de1e47f93%3A0xfefb543e9f31f3a5!2sJKV%20Engineering!5e0!3m2!1sen!2sus!4v1673966115245!5m2!1sen!2sus" 
      width="600" 
      height="450" 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"
      style={iframeStyle}
    ></iframe>
  </div>
)

export default GoogleMap