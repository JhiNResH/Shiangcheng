import { companyInfo } from '../../data/content';

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-image">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80" 
          alt="Technology"
        />
      </div>
      <div className="hero-content">
        <div className="hero-badge">
          <span>專業科技服務</span>
        </div>
        <h1>
          專業網通設備<br />
          <span className="highlight">安防監控專家</span>
        </h1>
        <p>
          祥承科技提供完整的網路設備、CCTV監控系統、通訊線材，
          專業品質，價格實惠，是您最佳的設備採購夥伴
        </p>
        <div className="hero-buttons">
          <a 
            href={companyInfo.shopeeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-shopee"
          >
            🛒 前往蝦皮商城
          </a>
          <a href="#contact" className="btn btn-primary">立即諮詢</a>
          <a href="#services" className="btn btn-secondary">瞭解更多</a>
        </div>
      </div>
    </section>
  );
}
