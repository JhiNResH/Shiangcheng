import { galleryImages } from '../../data/content';

export function Gallery() {
  return (
    <section className="gallery">
      <div className="section-header">
        <div className="section-tag">工作環境</div>
        <h2>專業團隊與設備</h2>
        <p>我們擁有先進的設備與專業的工作環境</p>
      </div>
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
