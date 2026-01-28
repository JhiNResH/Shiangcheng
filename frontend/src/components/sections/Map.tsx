import { companyInfo } from '../../data/content';

export function Map() {
  return (
    <section className="map-section">
      <div className="map-container">
        <iframe
          src={companyInfo.mapEmbedUrl}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="公司位置"
        />
      </div>
    </section>
  );
}
