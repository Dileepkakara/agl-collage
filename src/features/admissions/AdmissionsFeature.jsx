import { useState } from 'react'
import { Arrow, Button, EnquiryForm, imageUrl, Modal } from '../../components/shared/ui'

export default function AdmissionsFeature() {
  const [open, setOpen] = useState(false)
  return <>
    <section className="admissions-feature" id="admissions">
      <div className="admissions-feature-image"><img loading="lazy" src={imageUrl('photo-1523050854058-8df90110c9f1', 1500)} alt="Students sharing a moment on campus" /></div>
      <div className="admissions-feature-copy"><span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span><h2>Your journey<br /><em>starts here.</em></h2><p>Explore opportunities at AGL College and take the next step toward a future shaped by your curiosity.</p><div className="admissions-actions"><Button href="/admissions">Explore admissions</Button><button className="text-link-dark" onClick={() => setOpen(true)}>Enquire now <Arrow diagonal /></button></div></div>
    </section>
    {open && <Modal title="Start your AGL journey" onClose={() => setOpen(false)}><EnquiryForm onDone={() => setOpen(false)} /></Modal>}
  </>
}
