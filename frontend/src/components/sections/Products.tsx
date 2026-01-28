import { products, companyInfo } from '../../data/content';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface ProductCardProps {
  category: string;
  title: string;
  price: string;
  priceNote: string;
  image: string;
  delay: number;
}

function ProductCard({ category, title, price, priceNote, image, delay }: ProductCardProps) {
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <div 
      ref={ref}
      className={`product-card ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      <div className="product-image">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="product-info">
        <div className="product-category">{category}</div>
        <h3>{title}</h3>
        <div className="product-price">
          {price} <span>{priceNote}</span>
        </div>
      </div>
    </div>
  );
}

export function Products() {
  return (
    <section className="products" id="products">
      <div className="section-header">
        <div className="section-tag">熱銷商品</div>
        <h2>精選產品</h2>
        <p>專業網路設備、監控器材、通訊線材一應俱全</p>
      </div>
      <div className="products-grid">
        {products.map((product, index) => (
          <ProductCard
            key={product.title}
            category={product.category}
            title={product.title}
            price={product.price}
            priceNote={product.priceNote}
            image={product.image}
            delay={index}
          />
        ))}
      </div>
      <div className="products-cta">
        <a 
          href={companyInfo.shopeeUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-shopee"
        >
          🛒 前往蝦皮看更多商品
        </a>
      </div>
    </section>
  );
}
