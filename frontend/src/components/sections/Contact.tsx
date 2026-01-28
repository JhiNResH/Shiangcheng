import { companyInfo } from '../../data/content';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface ContactCardProps {
  icon: string;
  title: string;
  children: React.ReactNode;
  delay: number;
}

function ContactCard({ icon, title, children, delay }: ContactCardProps) {
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <div 
      ref={ref}
      className={`contact-card ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      <div className="contact-icon">{icon}</div>
      <div className="contact-info">
        <h4>{title}</h4>
        {children}
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="section-header">
          <div className="section-tag">聯絡我們</div>
          <h2>與我們取得聯繫</h2>
          <p>歡迎隨時與我們聯繫，我們將竭誠為您服務</p>
        </div>
        <div className="contact-grid">
          <ContactCard icon="📍" title="地址" delay={0}>
            <p className="address">{companyInfo.address}</p>
          </ContactCard>
          
          <ContactCard icon="📞" title="電話" delay={1}>
            <p>
              <a href={`tel:${companyInfo.phone.replace(/[()-\s]/g, '')}`}>
                {companyInfo.phone}
              </a>
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
              傳真 {companyInfo.fax}
            </p>
          </ContactCard>
          
          <ContactCard icon="✉️" title="信箱" delay={2}>
            <p style={{ fontSize: '0.85rem' }}>
              <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
            </p>
          </ContactCard>
          
          <ContactCard icon="🏢" title="統編" delay={3}>
            <p>{companyInfo.taxId}</p>
          </ContactCard>
        </div>
      </div>
    </section>
  );
}
