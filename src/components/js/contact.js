import React from "react"
import contactStyles from '../css/contact.module.css'
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
  return (
    <div className={contactStyles.contact}>
      <div className={contactStyles.container}>
        <h1>CONTACT</h1>
        <h4>お問い合わせは、SNSかメールでお願いいたします。</h4>
        <div className={contactStyles.icons}>

          <Link to="/" className={contactStyles.icon}>
            <FontAwesomeIcon icon={faTwitter} size="8x" />
          </Link>

          <Link to="/" className={contactStyles.icon}>
            <FontAwesomeIcon icon={faEnvelope} size="8x" />
          </Link>

        </div>
      </ div>
    </div>
  )
}