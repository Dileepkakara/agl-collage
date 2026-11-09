import { useEffect, useRef, useState } from 'react'
import { campusSpaces, departments, programs, stats } from '../../data'
import { Arrow, AnimatedCounter, Button, Footer, imageUrl, SectionHeading } from '../../components/shared/ui'
import AdmissionsFeature from '../admissions/AdmissionsFeature'
import AchievementsFeature from '../achievements/AchievementsFeature'
import ContactFeature from '../contact/ContactFeature'
import EventsFeature from '../events/EventsFeature'
import FacultyFeature from '../faculty/FacultyFeature'
import FAQFeature from '../faq/FAQFeature'
import GalleryFeature from '../gallery/GalleryFeature'
import StudentLifeFeature from '../student-life/StudentLifeFeature'

function Hero() {
  const heroRef = useRef(null)
  const [messageIndex, setMessageIndex] = useState(0)
  const messages = ['DISCOVER · LEARN · GROW', 'CAMPUS · COMMUNITY · POSSIBILITY', 'YOUR NEXT CHAPTER STARTS HERE']

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const timer = window.setInterval(() => setMessageIndex((index) => (index + 1) % messages.length), 3600)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const hero = heroRef.current
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!hero || reduceMotion || !finePointer) return undefined

    let frame = 0
    const move = (event) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const bounds = hero.getBoundingClientRect()
        const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 8
        const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 6
        hero.style.setProperty('--pointer-x', `${x}px`)
        hero.style.setProperty('--pointer-y', `${y}px`)
      })
    }
    const reset = () => {
      cancelAnimationFrame(frame)
      hero.style.setProperty('--pointer-x', '0px')
      hero.style.setProperty('--pointer-y', '0px')
    }
    hero.addEventListener('pointermove', move)
    hero.addEventListener('pointerleave', reset)
    return () => {
      cancelAnimationFrame(frame)
      hero.removeEventListener('pointermove', move)
      hero.removeEventListener('pointerleave', reset)
    }
  }, [])

  return <section className="hero" ref={heroRef}>
    <img className="hero-image" src={imageUrl('photo-1562774053-701939374585', 2000)} alt="A sunlit college campus framed by trees" />
    <div className="hero-shade"></div>
    <div className="hero-content">
      <span className="hero-kicker"><span className="live-dot"></span> AGL COLLEGE &nbsp;·&nbsp; A PLACE TO BECOME</span>
      <h1>Shape your future.<br /><em>Build your journey.</em></h1>
      <p>Good things begin with a question. Find your people, discover what moves you, and see where an AGL education can take you.</p>
      <div className="hero-actions"><Button href="/academics">Explore AGL</Button><a className="text-link-light" href="/admissions">Admissions <Arrow diagonal /></a></div>
    </div>
    <div className="hero-note"><span className="hero-note-mark">AGL</span><span>{messages[messageIndex]}</span><span className="hero-note-index">0{messageIndex + 1} / 03</span></div>
    <div className="hero-foot"><span>01 — 04&nbsp; &nbsp; CAMPUS, YOUR WAY</span><a href="#about">SCROLL TO EXPLORE <span className="scroll-line"></span></a></div>
  </section>
}

function CollegeIntroduction() {
  return <section className="intro section-wrap" id="about">
    <div className="intro-index"><span>01 / ABOUT AGL</span><span className="thin-rule"></span></div>
    <div className="intro-copy"><h2>Where learning<br />meets <em>opportunity.</em></h2><div className="intro-bottom"><p>AGL College is a place to explore your interests, build confidence, and shape the next steps in your own story.</p><Button href="/about" secondary>Get to know us</Button></div><div className="college-values"><article><span>OUR VISION</span><p>Learning that opens doors to new ideas and possibility.</p></article><article><span>OUR MISSION</span><p>Support students as they grow knowledge, confidence, and purpose.</p></article></div></div>
    <div className="intro-photo"><img loading="lazy" src={imageUrl('photo-1523050854058-8df90110c9f1')} alt="Students enjoying time together on campus" /><span className="photo-caption">A CAMPUS BUILT AROUND POSSIBILITY</span></div>
  </section>
}

function CollegeHighlights() {
  return <section className="stats-band"><div className="stats-heading"><span className="eyebrow">A LITTLE ABOUT US</span><h2>One campus.<br /><em>Room to explore.</em></h2></div><div className="stats-list">{stats.map((item) => <div className="stat" key={item.label}><AnimatedCounter value={item.value} suffix={item.suffix} /><span>{item.label}</span></div>)}</div><span className="stats-aside">ILLUSTRATIVE DEMO FIGURES · REPLACE WITH VERIFIED COLLEGE DATA</span></section>
}

function AcademicShowcase() {
  return <section className="academics-section section-wrap">
    <div className="section-heading-row"><SectionHeading eyebrow="02 / FIND YOUR FOCUS" title={<>A direction.<br /><em>Not a limit.</em></>} copy="Explore a starting point for the things you’re curious about. There’s more than one way to get where you’re going." /><a className="inline-link" href="/academics">All programs <Arrow diagonal /></a></div>
    <div className="program-grid">{programs.map((program, index) => <a className={`program-card program-card-${index + 1}`} href="/academics" key={program.name}>
      <div className="program-photo"><img loading="lazy" src={imageUrl(program.image, 900)} alt="" /><span className="program-number">0{index + 1}</span></div>
      <div className="program-info"><span className="eyebrow">{program.category} &nbsp;·&nbsp; {program.degree}</span><h3>{program.name}</h3><p>{program.description}</p><span className="card-link">Discover the program <Arrow /></span></div>
    </a>)}</div>
  </section>
}

function CampusExperience() {
  const [selectedSpace, setSelectedSpace] = useState(0)
  const space = campusSpaces[selectedSpace]
  return <section className="campus-section">
    <div className="campus-image"><img loading="lazy" src={imageUrl(space.image)} alt={space.title} /><span className="campus-image-label">{space.title.toUpperCase()} · AGL COLLEGE</span></div>
    <div className="campus-copy" id="campus"><span className="eyebrow">03 / AROUND CAMPUS</span><h2>Find your<br /><em>kind of place.</em></h2><p>{space.detail}</p><div className="campus-points" role="tablist" aria-label="Campus spaces">{campusSpaces.map((item, index) => <button key={item.title} className={index === selectedSpace ? 'campus-point active' : 'campus-point'} role="tab" aria-selected={index === selectedSpace} onClick={() => setSelectedSpace(index)}><span>0{index + 1}</span> {item.title}<Arrow /></button>)}</div><Button href="/campus" secondary>Explore campus</Button></div>
  </section>
}

function DepartmentExplorer() {
  const [selectedDepartment, setSelectedDepartment] = useState(0)
  const selected = departments[selectedDepartment]
  return <section className="department-section section-wrap" id="departments">
    <div className="section-heading-row"><SectionHeading eyebrow="04 / OUR DEPARTMENTS" title={<>Different paths.<br /><em>One community.</em></>} copy="Meet the people and ideas behind your next big interest." /><a className="inline-link" href="/departments">Explore departments <Arrow diagonal /></a></div>
    <div className="department-explorer"><div className="department-list" role="tablist" aria-label="Departments">{departments.map((dept, index) => <button key={dept.name} className={selectedDepartment === index ? 'department-tab active' : 'department-tab'} onClick={() => setSelectedDepartment(index)} role="tab" aria-selected={selectedDepartment === index}><span>{dept.short}</span>{dept.name}<Arrow /></button>)}</div><div className="department-detail" role="tabpanel"><img loading="lazy" src={imageUrl(selected.image, 1100)} alt={`${selected.name} department`} /><div className="department-overlay"><span className="eyebrow">{selected.programs}</span><h3>{selected.name}</h3><p>{selected.detail}</p><a href="/departments" className="circle-arrow" aria-label={`Explore ${selected.name}`}><Arrow diagonal /></a></div></div></div>
  </section>
}

function StudentStory() {
  return <section className="quote-section"><span className="quote-mark">“</span><blockquote>“The best part wasn’t just finding what I wanted to do. It was finding the confidence to do it.”</blockquote><div className="quote-byline"><span className="quote-avatar">AS</span><span><strong>AGL student community</strong><small>Every story starts somewhere.</small></span></div><a className="inline-link" href="/about">More about the AGL experience <Arrow diagonal /></a></section>
}

function CareerPreview() {
  return <section className="career-band"><div className="career-photo"><img loading="lazy" src={imageUrl('photo-1522202176988-66273c2fd55f')} alt="Students collaborating on a project" /></div><div className="career-copy"><span className="eyebrow">06 / WHAT COMES NEXT</span><h2>Ready for the<br /><em>world out there.</em></h2><p>Build skills that travel with you. Find mentorship, career support, and a community that keeps showing up for your next step.</p><div className="career-metrics"><span><strong>1:1</strong><small>career guidance</small></span><span><strong>30+</strong><small>ways to explore</small></span></div><Button href="/placements">Explore career support</Button></div></section>
}

export default function HomePage() {
  return <>
    <Hero />
    <CollegeIntroduction />
    <CollegeHighlights />
    <AcademicShowcase />
    <CampusExperience />
    <DepartmentExplorer />
    <FacultyFeature />
    <StudentStory />
    <StudentLifeFeature />
    <AchievementsFeature />
    <EventsFeature showHeading={false} />
    <GalleryFeature showHeading={false} />
    <CareerPreview />
    <AdmissionsFeature />
    <FAQFeature />
    <ContactFeature />
    <Footer />
  </>
}
