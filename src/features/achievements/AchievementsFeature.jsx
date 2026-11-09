import { achievements } from '../../data'
import { SectionHeading } from '../../components/shared/ui'

export default function AchievementsFeature() {
  return <section className="achievements-section section-wrap" id="achievements">
    <div className="achievements-heading"><SectionHeading eyebrow="A CULTURE OF PROGRESS" title={<>Small steps.<br /><em>Meaningful momentum.</em></>} copy="An education is measured in more than a single milestone. It’s the confidence, care, and curiosity students carry forward."/></div>
    <div className="achievement-list">{achievements.map((item) => <article className="achievement-item" key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div><i aria-hidden="true">↗</i></article>)}</div>
    <p className="demo-caption">Highlights describe AGL’s learning aspirations; specific awards and outcome figures can be added when verified.</p>
  </section>
}
