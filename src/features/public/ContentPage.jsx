import { useState } from 'react'
import { departments, events, notices, programs } from '../../data'
import { Arrow, Button, EnquiryForm, Footer, imageUrl, Modal, SectionHeading } from '../../components/shared/ui'
import GalleryFeature from '../gallery/GalleryFeature'

const pageCopy = {
  '/about': ['A little more about us', 'A college that believes in your next step.', 'AGL is a community for curious minds—built around thoughtful teaching, practical opportunity, and the belief that every student has a story worth shaping.'],
  '/academics': ['Learn with purpose', 'Find your direction. Keep your options open.', 'Explore programs designed to connect what you learn in class with the questions and opportunities waiting beyond it.'],
  '/admissions': ['Admissions at AGL', 'Your next chapter starts here.', 'A clear, supportive path from your first question to your first day on campus. We’re here to help you find the right fit.'],
  '/campus': ['Life at AGL', 'A campus with room for you.', 'Make space for focus, friendship, discovery, and all the in-between moments that make college yours.'],
  '/departments': ['Explore our departments', 'A place for what interests you.', 'Meet our departments and the people who make every subject feel connected to the world around us.'],
  '/faculty': ['Meet our community', 'People make the difference.', 'Get to know the teachers and mentors ready to help you bring your ideas to life.'],
  '/events': ['The AGL calendar', 'There’s always something happening.', 'Join a conversation, find your people, or try something completely new.'],
  '/placements': ['Career & opportunity', 'Ready for the world out there.', 'Build the skills, confidence, and connections to take your next step—wherever it leads.'],
  '/gallery': ['A look around AGL', 'A thousand little moments.', 'Take a glimpse at the people, places, and everyday moments that make our college a community.'],
  '/notices': ['The noticeboard', 'Good to know.', 'Updates and important dates from across the AGL community.'],
  '/contact': ['Get in touch', 'We’re happy to help.', 'Questions about a program, admissions, or campus life? Reach out—we’ll help you find your way.'],
}

function PageHero({ path, copy, onEnquire }) {
  const campus = path === '/campus'
  return <section className="inner-hero"><img src={imageUrl(campus ? 'photo-1498243691581-b145c3f54a5a' : 'photo-1562774053-701939374585', 1800)} alt="" /><div className="inner-hero-shade"></div><div className="inner-hero-content"><span className="eyebrow">{copy[0]}</span><h1>{copy[1]}</h1><p>{copy[2]}</p>{path === '/admissions' && <button className="button" onClick={onEnquire}>Start an enquiry <Arrow /></button>}</div></section>
}

function AboutStory() {
  return <section className="section-wrap content-section about-story"><div><SectionHeading eyebrow="OUR PURPOSE" title={<>A good education<br /><em>opens doors.</em></>} copy="We believe college is a time to discover how you think, what you care about, and what you want to contribute. At AGL, learning is personal, practical, and always connected to a bigger world."/><Button href="/academics" secondary>Explore what you can study</Button></div><div className="about-values"><article><span>01</span><h3>Stay curious.</h3><p>Ask bigger questions and make space for new ideas.</p></article><article><span>02</span><h3>Learn by doing.</h3><p>Connect classroom thinking with meaningful experience.</p></article><article><span>03</span><h3>Grow together.</h3><p>Find a community that helps you move forward.</p></article></div></section>
}

function AcademicsPage() {
  return <section className="section-wrap content-section"><SectionHeading eyebrow="UNDERGRADUATE" title={<>Your interests,<br /><em>in focus.</em></>} copy="Start with a subject that sparks something. Build from there."/><div className="program-grid">{programs.map((program, i) => <a href="/contact" className={`program-card program-card-${i + 1}`} key={program.name}><div className="program-photo"><img loading="lazy" src={imageUrl(program.image, 900)} alt="" /></div><div className="program-info"><span className="eyebrow">{program.category} · {program.degree}</span><h3>{program.name}</h3><p>{program.description}</p><span className="card-link">Ask about this program <Arrow /></span></div></a>)}</div></section>
}

function DepartmentsPage() {
  return <section className="section-wrap content-section"><SectionHeading eyebrow="DISCOVER YOUR SUBJECT" title="Meet the departments" /><div className="dept-cards">{departments.map((dept) => <article className="dept-card" key={dept.name}><img loading="lazy" src={imageUrl(dept.image)} alt="" /><div><span className="eyebrow">{dept.programs}</span><h3>{dept.name}</h3><p>{dept.detail}</p></div></article>)}</div></section>
}

function AdmissionsPage({ onEnquire }) {
  const [faq, setFaq] = useState(0)
  const faqs = ['How do I apply to AGL College?', 'What documents should I prepare?', 'Can I visit the campus before applying?']
  return <section className="section-wrap content-section admissions-layout"><div><SectionHeading eyebrow="HOW IT WORKS" title={<>A few steps.<br /><em>A big beginning.</em></>} copy="Our admissions team is ready to help at every step."/><ol className="process-list"><li><strong>01</strong><span><b>Explore your options</b><small>Find a program that feels right for you.</small></span></li><li><strong>02</strong><span><b>Send us an enquiry</b><small>We’ll help with eligibility and next steps.</small></span></li><li><strong>03</strong><span><b>Complete your application</b><small>Share your details and supporting documents.</small></span></li><li><strong>04</strong><span><b>Begin your AGL story</b><small>We’ll be in touch with everything you need.</small></span></li></ol></div><div className="faq-panel"><span className="eyebrow">FREQUENTLY ASKED</span><h3>A few things you might be wondering.</h3>{faqs.map((question, i) => <button className="faq-row" onClick={() => setFaq(faq === i ? -1 : i)} key={question} aria-expanded={faq === i}><span>{question}<b>{faq === i ? '−' : '+'}</b></span>{faq === i && <small>Every student’s path is a little different. Contact our admissions team and we’ll help you with the details and documents for your chosen program.</small>}</button>)}<Button onClick={onEnquire} secondary>Ask admissions</Button></div></section>
}

function EventsPage() {
  return <section className="section-wrap content-section"><SectionHeading eyebrow="SAVE YOUR PLACE" title={<>Ideas, people,<br /><em>good energy.</em></>} copy="Some of the best things happen when we get together."/><div className="event-grid">{events.map((event) => <article className="event-card" key={event.title}><a href="/contact" className="event-image"><img loading="lazy" src={imageUrl(event.image, 800)} alt="" /><span className="event-date"><strong>{event.date}</strong>{event.month}</span><span className="event-arrow"><Arrow diagonal /></span></a><div className="event-info"><span className="eyebrow">{event.type} · {event.location}</span><h3>{event.title}</h3></div></article>)}</div></section>
}

function CampusPage() {
  return <section className="section-wrap content-section"><div className="campus-story"><SectionHeading eyebrow="MAKE YOURSELF AT HOME" title={<>More than a place<br /><em>to study.</em></>} copy="A welcoming campus gives you room to find your people, settle into your own rhythm, and make the most of every day."/><img loading="lazy" src={imageUrl('photo-1523580494863-6f3031224c94')} alt="Students connecting on campus" /></div></section>
}

function PlacementsPage() {
  return <section className="section-wrap content-section"><div className="placements-grid"><div><span className="eyebrow">YOUR NEXT MOVE</span><h2>Support that goes<br /><em>where you go.</em></h2></div><p>Career guidance, hands-on projects, and opportunities to meet people doing work that matters. Your future isn’t one-size-fits-all, and your support shouldn’t be either.</p><div className="career-metrics"><span><strong>1:1</strong><small>career guidance</small></span><span><strong>30+</strong><small>learning pathways</small></span></div></div></section>
}

function FacultyPage() {
  return <section className="section-wrap content-section"><SectionHeading eyebrow="THE PEOPLE WHO TEACH" title={<>Good questions<br /><em>start conversations.</em></>} copy="Our faculty bring curiosity and care into the classroom, every day."/><div className="faculty-preview"><img loading="lazy" src={imageUrl('photo-1551836022-d5d88e9218df')} alt="Faculty members collaborating" /><div><span className="eyebrow">A COMMUNITY OF MENTORS</span><h3>People who want<br />to see you thrive.</h3><p>Get to know our departments, meet our faculty, and find the support that helps you do your best work.</p><Button href="/departments" secondary>Meet our departments</Button></div></div></section>
}

function NoticesPage() {
  return <section className="section-wrap content-section notices-page"><SectionHeading eyebrow="LATEST UPDATES" title="The things to know." />{notices.map((notice, i) => <article className="notice-item" key={notice.title}><span className="notice-tag">{notice.category}</span><span className="notice-text"><strong>{notice.title}</strong><small>{notice.date} · {notice.priority}</small></span><span className="notice-index">0{i + 1}</span></article>)}</section>
}

function ContactPage() {
  return <section className="section-wrap content-section contact-layout"><div><SectionHeading eyebrow="SAY HELLO" title={<>We’re all<br /><em>ears.</em></>} copy="Tell us what’s on your mind and the right person will get back to you."/><div className="contact-details"><a href="mailto:hello@aglcollege.edu">hello@aglcollege.edu <Arrow diagonal /></a><a href="tel:+910000000000">+91 00000 00000 <Arrow diagonal /></a><p>College Road, India<br />Monday–Saturday, 9am–4pm</p></div></div><EnquiryForm onDone={() => {}} /></section>
}

export default function ContentPage({ path }) {
  const [modal, setModal] = useState(false)
  const copy = pageCopy[path] || pageCopy['/about']
  return <>
    <PageHero path={path} copy={copy} onEnquire={() => setModal(true)} />
    {path === '/about' && <AboutStory />}
    {path === '/academics' && <AcademicsPage />}
    {path === '/departments' && <DepartmentsPage />}
    {path === '/admissions' && <AdmissionsPage onEnquire={() => setModal(true)} />}
    {path === '/events' && <EventsPage />}
    {path === '/gallery' && <GalleryFeature />}
    {path === '/campus' && <CampusPage />}
    {path === '/placements' && <PlacementsPage />}
    {path === '/faculty' && <FacultyPage />}
    {path === '/notices' && <NoticesPage />}
    {path === '/contact' && <ContactPage />}
    {modal && <Modal title="Start your AGL journey" onClose={() => setModal(false)}><EnquiryForm onDone={() => setModal(false)} /></Modal>}
    <Footer />
  </>
}
