import { studentExperiences } from '../../data'
import { Arrow, imageUrl, SectionHeading } from '../../components/shared/ui'

export default function StudentLifeFeature() {
  return <section className="student-life-section" id="student-life">
    <div className="student-life-inner section-wrap">
      <div className="student-life-heading"><SectionHeading eyebrow="MAKE IT YOURS" title={<>Find your people.<br /><em>Follow your curiosity.</em></>} copy="College is made up of the things you learn—and the moments you make along the way."/><a className="inline-link" href="/events">Explore student life <Arrow diagonal /></a></div>
      <div className="student-life-grid">{studentExperiences.map((item, index) => <a className={`student-life-card student-life-card-${index + 1}`} href="/events" key={item.title}><img loading="lazy" src={imageUrl(item.image, 950)} alt="" /><span className="student-life-shade"></span><span className="student-life-card-copy"><span className="eyebrow">{item.category}</span><strong>{item.title}</strong><Arrow diagonal /></span></a>)}</div>
    </div>
  </section>
}
