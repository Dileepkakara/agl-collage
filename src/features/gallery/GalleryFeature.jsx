import { useEffect, useState } from 'react'
import { galleryImages } from '../../data'
import { imageUrl, SectionHeading } from '../../components/shared/ui'

export default function GalleryFeature({ showHeading = true }) {
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const go = (direction) => setActive((index) => (index + direction + galleryImages.length) % galleryImages.length)

  useEffect(() => {
    if (!lightbox) return undefined
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setLightbox(false)
      if (event.key === 'ArrowLeft') go(-1)
      if (event.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightbox])

  const touchStart = (event) => { event.currentTarget.dataset.touchX = event.touches[0].clientX }
  const touchEnd = (event) => {
    const start = Number(event.currentTarget.dataset.touchX)
    const delta = event.changedTouches[0].clientX - start
    if (Math.abs(delta) > 40) go(delta < 0 ? 1 : -1)
  }

  return <section className={`gallery-feature section-wrap ${showHeading ? 'content-section' : 'home-gallery'}`} id={showHeading ? undefined : 'gallery'}>
    {showHeading && <SectionHeading eyebrow="MOMENTS AT AGL" title={<>A campus full<br /><em>of stories.</em></>} copy="Take a closer look at the places, people, and everyday moments that make this community."/>}
    <div className="gallery-stage" onTouchStart={touchStart} onTouchEnd={touchEnd}>
      <button className="gallery-side gallery-side-left" onClick={() => go(-1)} aria-label="Previous photo"><img src={imageUrl(galleryImages[(active - 1 + galleryImages.length) % galleryImages.length].src, 600)} alt="" /></button>
      <button className="gallery-featured" onClick={() => setLightbox(true)} aria-label={`View full-size image: ${galleryImages[active].caption}`}><img src={imageUrl(galleryImages[active].src, 1500)} alt={galleryImages[active].caption} /></button>
      <button className="gallery-side gallery-side-right" onClick={() => go(1)} aria-label="Next photo"><img src={imageUrl(galleryImages[(active + 1) % galleryImages.length].src, 600)} alt="" /></button>
    </div>
    <div className="gallery-controls"><p>{galleryImages[active].caption}</p><span>{String(active + 1).padStart(2, '0')} <i>/</i> {String(galleryImages.length).padStart(2, '0')}</span><div><button onClick={() => go(-1)} aria-label="Previous photo">←</button><button onClick={() => go(1)} aria-label="Next photo">→</button></div></div>
    <div className="gallery-thumbnails">{galleryImages.map((photo, index) => <button className={index === active ? 'active' : ''} onClick={() => setActive(index)} key={photo.src} aria-label={`Show photo ${index + 1}: ${photo.caption}`}><img loading="lazy" src={imageUrl(photo.src, 240)} alt="" /></button>)}</div>
    {lightbox && <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={(event) => { if (event.target === event.currentTarget) setLightbox(false) }}><button onClick={() => setLightbox(false)} aria-label="Close photo viewer">×</button><button onClick={() => go(-1)} aria-label="Previous photo">←</button><figure><img src={imageUrl(galleryImages[active].src, 2000)} alt={galleryImages[active].caption} /><figcaption>{galleryImages[active].caption}</figcaption></figure><button onClick={() => go(1)} aria-label="Next photo">→</button></div>}
  </section>
}
