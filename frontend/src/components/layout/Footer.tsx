import { companyInfo } from '../../data/content';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">{companyInfo.name}</div>
        <div className="footer-links">
          <a 
            href={companyInfo.shopeeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-shopee"
          >
            🛒 蝦皮商城
          </a>
        </div>
        <div className="footer-text">
          © {currentYear} <span>{companyInfo.fullName}</span> {companyInfo.englishName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
