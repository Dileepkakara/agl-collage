import { useState } from 'react'
import { Arrow } from '../../components/shared/ui'

export default function ContactFeature() {
  const [submitted, setSubmitted] = useState(false)
  const submit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }
  return <section className="contact-feature" id="contact">
    <div className="contact-feature-inner section-wrap">
      <div className="contact-feature-copy"><span className="eyebrow">LET’S START A CONVERSATION</span><h2>We’re here<br /><em>to help you find your way.</em></h2><p>Questions about programs, admissions, or campus life? Reach out and we’ll point you in the right direction.</p>
        <div className="contact-methods"><a href="mailto:hello@aglcollege.edu"><span className="eyebrow">EMAIL</span><strong>hello@aglcollege.edu <Arrow diagonal /></strong></a><a href="tel:+910000000000"><span className="eyebrow">CALL</span><strong>+91 00000 00000 <Arrow diagonal /></strong></a><div><span className="eyebrow">VISIT</span><strong>College Road, India</strong><small>Monday–Saturday · 9:00 am–4:00 pm</small></div></div>
        <div className="map-panel" role="img" aria-label="Map illustration showing the AGL College location on College Road, India"><span className="map-road map-road-one"></span><span className="map-road map-road-two"></span><span className="map-road map-road-three"></span><span className="map-pin">A</span><span className="map-label">AGL COLLEGE · COLLEGE ROAD</span></div>
      </div>
      <div className="contact-form-panel">{submitted ? <div className="contact-success"><span>✓</span><h3>Thanks for reaching out.</h3><p>Your message is ready for our team. This demo doesn’t send information to a server.</p><button className="text-link-dark" onClick={() => setSubmitted(false)}>Send another message <Arrow /></button></div> : <form className="contact-form" onSubmit={submit}><span className="eyebrow">SEND AN ENQUIRY</span><h3>How can we help?</h3><label>Name<input name="name" autoComplete="name" required placeholder="Your name" /></label><div className="contact-input-row"><label>Phone<input name="phone" type="tel" autoComplete="tel" required placeholder="+91" /></label><label>Email<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label></div><label>Program of interest<select defaultValue=""><option value="" disabled>Select a program</option><option>Computer Science</option><option>Business & Management</option><option>Arts & Humanities</option><option>General enquiry</option></select></label><label>Message<textarea name="message" rows="3" required placeholder="Tell us what you’d like to know." /></label><button className="button" type="submit">Send message <Arrow /></button><small>Frontend-only demo. Your details stay in this browser.</small></form>}</div>
    </div>
  </section>
}
