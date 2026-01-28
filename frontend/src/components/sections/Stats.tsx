import { stats } from '../../data/content';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

function StatCard({ number, label, delay }: { number: string; label: string; delay: number }) {
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <div 
      ref={ref}
      className={`stat-card ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      <div className="stat-number">{number}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="stats">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <StatCard 
            key={stat.label} 
            number={stat.number} 
            label={stat.label}
            delay={index}
          />
        ))}
      </div>
    </section>
  );
}
