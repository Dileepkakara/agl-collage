import { useEffect, useState } from 'react'
import { navigation } from './data'
import { Arrow, Brand } from './components/shared/ui'
import HomePage from './features/home/HomePage'
import ContentPage from './features/public/ContentPage'

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', updateHeader, { passive: true })
    updateHeader()
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  return <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
    <div className="header-inner">
      <Brand />
      <nav className={`main-nav ${open ? 'nav-open' : ''}`} aria-label="Main navigation">
        {navigation.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="mobile-nav-cta" href="/admissions" onClick={() => setOpen(false)}>Enquire now <Arrow diagonal /></a>
      </nav>
      <a className="header-cta" href="/admissions">Enquire now <Arrow diagonal /></a>
      <button className={`menu-toggle ${open ? 'menu-open' : ''}`} onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
        <span></span><span></span>
      </button>
    </div>
  </header>
}

const publicPaths = ['/about', '/academics', '/admissions', '/campus', '/departments', '/faculty', '/events', '/placements', '/gallery', '/notices', '/contact']

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  return <>
    <Header />
    {publicPaths.includes(path) ? <ContentPage path={path} /> : <HomePage />}
  </>
}
