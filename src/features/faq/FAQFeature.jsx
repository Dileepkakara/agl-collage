import { useState } from 'react'
import { frequentlyAskedQuestions } from '../../data'
import { Arrow, SectionHeading } from '../../components/shared/ui'

export default function FAQFeature() {
  const [active, setActive] = useState(0)
  return <section className="faq-section section-wrap" id="faq">
    <div><SectionHeading eyebrow="A FEW THINGS TO KNOW" title={<>Good questions.<br /><em>Helpful answers.</em></>} copy="Need a little more information before you get in touch? Start here."/></div>
    <div className="faq-list">{frequentlyAskedQuestions.map(({ question, answer }, index) => <div className={`faq-item ${active === index ? 'active' : ''}`} key={question}><button onClick={() => setActive(active === index ? -1 : index)} aria-expanded={active === index}><span>{question}</span><i>{active === index ? '−' : '+'}</i></button><div className="faq-answer"><p>{answer}</p></div></div>)}<a className="inline-link" href="/contact">Still have questions? Get in touch <Arrow diagonal /></a></div>
  </section>
}
