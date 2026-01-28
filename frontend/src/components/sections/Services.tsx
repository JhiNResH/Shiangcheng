import { services } from '../../data/content';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

function ServiceCard({ 
  icon, 
  title, 
  description, 
  delay 
}: { 
  icon: string; 
  title: string; 
  description: string; 
  delay: number;
}) {
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <div 
      ref={ref}
      className={`service-card ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export function Services() {
  return (
    <section className="services" id="services">
      <div className="section-header">
        <div className="section-tag">服務項目</div>
        <h2>專業解決方案</h2>
        <p>我們提供全方位的科技服務，滿足您的各種需求</p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
            delay={index}
          />
        ))}
      </div>
    </section>
  );
}
