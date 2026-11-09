import { facultyProfiles } from '../../data'
import { Arrow, imageUrl, SectionHeading } from '../../components/shared/ui'

export default function FacultyFeature() {
  return <section className="faculty-section section-wrap" id="faculty">
    <div className="faculty-editorial">
      <SectionHeading eyebrow="PEOPLE WHO MAKE THE DIFFERENCE" title={<>Guidance for<br /><em>the road ahead.</em></>} copy="Learning is a conversation. Meet the mentors who bring curiosity, care, and fresh perspectives to the classroom."/>
      <a className="inline-link" href="/faculty">Meet our community <Arrow diagonal /></a>
    </div>
    <div className="leadership-feature"><div className="leadership-image"><img loading="lazy" src={imageUrl('photo-1573496359142-b8d87734a5a2', 1000)} alt="College academic leader" /></div><div className="leadership-message"><span className="eyebrow">A NOTE FROM OUR ACADEMIC LEADERSHIP</span><blockquote>“An education should give you the confidence to ask better questions—and the support to discover where they lead.”</blockquote><span className="leadership-signoff">A message to every AGL student</span><span className="leadership-caption">LEARN WITH PURPOSE · GROW TOGETHER</span></div></div>
    <div className="faculty-grid">{facultyProfiles.map((person) => <article className="faculty-card" key={person.name}><div className="faculty-portrait"><img loading="lazy" src={imageUrl(person.image, 700)} alt={`${person.name}, ${person.role}`} /></div><div className="faculty-card-copy"><span className="eyebrow">{person.department}</span><h3>{person.name}</h3><p>{person.role} · {person.focus}</p></div></article>)}</div>
    <p className="demo-caption">Illustrative faculty profiles for this website demo.</p>
  </section>
}
