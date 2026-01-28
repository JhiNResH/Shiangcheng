import { aboutFeatures } from '../../data/content';

export function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-visual">
          <div className="about-card">
            <img 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80" 
              alt="Tech workspace"
            />
            <div className="about-card-overlay">
              <div className="number">20+</div>
              <div className="label">年專業經驗，值得信賴</div>
            </div>
          </div>
        </div>
        <div className="about-text">
          <h2>關於祥承科技</h2>
          <p>
            祥承科技企業有限公司深耕網通設備領域多年，專營網路線材、監控設備、
            通訊器材等專業產品，是業界值得信賴的供應商。
          </p>
          <p>
            我們提供完整的產品線，從基礎線材到專業監控系統，
            無論是工程採購或零售需求，都能提供最優質的服務與價格。
          </p>
          <ul className="feature-list">
            {aboutFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
