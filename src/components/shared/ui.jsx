import { useEffect, useRef, useState } from 'react'

const imageFallbacks = {
  'photo-1523050854058-8df90110c9f1': 'photo-1523580494863-6f3031224c94',
}

export const imageUrl = (id, width = 1200) => `https://images.unsplash.com/${imageFallbacks[id] || id}?auto=format&fit=crop&w=${width}&q=85`

export function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>
}

export function Brand({ inverse = false }) {
  return <a className={`brand ${inverse ? 'brand-inverse' : ''}`} href="/" aria-label="AGL College home"><span className="brand-mark">A<span>.</span></span><span className="brand-name">AGL <small>COLLEGE</small></span></a>
}

export function Button({ href, children, secondary = false, onClick, type = 'button' }) {
  const className = `button ${secondary ? 'button-secondary' : ''}`
  return href ? <a className={className} href={href}>{children}<Arrow /></a> : <button className={className} onClick={onClick} type={type}>{children}<Arrow /></button>
}

export function SectionHeading({ eyebrow, title, copy, light = false }) {
  return <div className={`section-title ${light ? 'section-title-light' : ''}`}>
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {copy && <p>{copy}</p>}
  </div>
}

export function AnimatedCounter({ value, suffix = '' }) {
  const ref = useRef(null)
  const [count, setCount] = useState(0)
  const number = Number(value)
  const padded = String(value).length > 1 && String(value).startsWith('0')
  useEffect(() => {
    const node = ref.current
    if (!node) return undefined
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion || !('IntersectionObserver' in window)) {
      setCount(number)
      return undefined
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      const start = performance.now()
      const duration = 1100
      const animate = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - (1 - progress) ** 4
        setCount(Math.round(number * eased))
        if (progress < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
      observer.disconnect()
    }, { threshold: .55 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [number])
  const formatted = padded ? String(count).padStart(String(value).length, '0') : new Intl.NumberFormat('en-US').format(count)
  return <strong ref={ref}>{formatted}<i>{suffix}</i></strong>
}

export function Modal({ title, children, onClose }) {
  return <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
    <section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <button className="modal-close" onClick={onClose} aria-label="Close dialog">×</button>
      <span className="eyebrow">AGL COLLEGE</span>
      <h2 id="modal-title">{title}</h2>
      {children}
    </section>
  </div>
}

export function EnquiryForm({ onDone }) {
  const [submitted, setSubmitted] = useState(false)
  const submit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    window.setTimeout(onDone, 1800)
  }
  if (submitted) return <div className="success-message"><span className="success-icon">✓</span><h3>Thank you for reaching out.</h3><p>Our admissions team will be in touch soon.</p></div>
  return <form className="enquiry-form" onSubmit={submit}>
    <label>Your name<input required name="name" autoComplete="name" placeholder="How should we address you?" /></label>
    <label>Phone number<input required type="tel" name="phone" autoComplete="tel" placeholder="+91" /></label>
    <label>Email address<input required type="email" name="email" autoComplete="email" placeholder="you@example.com" /></label>
    <label>Area of interest<select defaultValue=""><option value="" disabled>Select a program area</option><option>Computer Science</option><option>Business & Management</option><option>Arts & Humanities</option><option>Still exploring</option></select></label>
    <label>Message<textarea required name="message" rows="3" placeholder="Tell us what you’d like to know." /></label>
    <button className="button" type="submit">Send an enquiry <Arrow /></button>
    <small>This demo form is frontend-only. Your details aren’t sent to a server.</small>
  </form>
}

export function Footer() {
  return <footer className="footer">
    <div className="footer-top">
      <div className="footer-cta"><span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span><h2>Make room for<br /><em>what’s next.</em></h2><Button href="/admissions">Explore admissions</Button></div>
      <div className="footer-links">
        <div><span className="footer-label">EXPLORE</span><a href="/about">Our college</a><a href="/academics">Academics</a><a href="/campus">Campus life</a><a href="/events">Events</a></div>
        <div><span className="footer-label">GET IN TOUCH</span><a href="/contact">Contact us</a><a href="/admissions">Admissions</a><a href="/notices">Notices & news</a><a href="/gallery">Campus gallery</a></div>
        <div className="footer-contact"><span className="footer-label">FIND US</span><p>AGL College<br />College Road, India</p><a href="tel:+910000000000">+91 00000 00000</a><a href="mailto:hello@aglcollege.edu">hello@aglcollege.edu</a></div>
      </div>
    </div>
    <div className="footer-bottom"><Brand inverse /><span>© 2026 AGL College. Learn with purpose.</span><a href="/contact">Instagram&nbsp; ↗</a></div>
  </footer>
}
