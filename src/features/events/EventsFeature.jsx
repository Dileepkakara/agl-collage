import { useRef } from 'react'
import { events } from '../../data'
import { Arrow, imageUrl, SectionHeading } from '../../components/shared/ui'

export default function EventsFeature({ showHeading = true }) {
  const railRef = useRef(null)
  const scroll = (direction) => railRef.current?.scrollBy({ left: direction * railRef.current.clientWidth * .78, behavior: 'smooth' })

  return <section className={`events-section ${showHeading ? 'section-wrap content-section' : 'home-events'}`} id={showHeading ? undefined : 'events'}>
    <div className="events-heading"><SectionHeading eyebrow="WHAT’S HAPPENING" title={<>Ideas, people,<br /><em>good energy.</em></>} copy="Join a conversation, find your people, or try something completely new."/><a className="inline-link" href="/events">View all events <Arrow diagonal /></a></div>
    <div className="event-rail-wrap">
      <div className="event-rail" ref={railRef}>{events.map((event) => <article className="event-card" key={event.title}>
        <a href="/events" className="event-image"><img loading="lazy" src={imageUrl(event.image, 900)} alt="" /><span className="event-date"><strong>{event.date}</strong>{event.month}</span><span className="event-arrow"><Arrow diagonal /></span></a>
        <div className="event-info"><span className="eyebrow">{event.type} &nbsp;·&nbsp; {event.location}</span><h3><a href="/events">{event.title}</a></h3><p>{event.description}</p></div>
      </article>)}</div>
      <div className="event-rail-controls"><button onClick={() => scroll(-1)} aria-label="Previous events">←</button><button onClick={() => scroll(1)} aria-label="More events">→</button></div>
    </div>
  </section>
}
