import { Link } from 'react-router-dom';
import './Header.scss';

const SERVICE_ITEMS = [
  { icon: 'ti-world-upload',    bg: '#EBF3FF', color: '#1A4FAF', nameKey: 'svc_export',    descKey: 'svc_export_desc' },
  { icon: 'ti-world-download',  bg: '#E6F9F2', color: '#0F6E56', nameKey: 'svc_import',    descKey: 'svc_import_desc' },
  { icon: 'ti-truck-delivery',  bg: '#FFF4E6', color: '#854F0B', nameKey: 'svc_logistics', descKey: 'svc_logistics_desc' },
  { icon: 'ti-file-certificate',bg: '#FFF0EB', color: '#993C1D', nameKey: 'svc_customs',   descKey: 'svc_customs_desc' },
  { icon: 'ti-school',          bg: '#F0EEFF', color: '#534AB7', nameKey: 'svc_edu',       descKey: 'svc_edu_desc' },
];

export default function Header({ t }) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="hero-badge"><span className="badge-dot" />{t('hero_badge')}</div>
            <h1 className="hero-title">{t('hero_title1')}<em><br /> {t('hero_title2')}</em></h1>
            <p className="hero-sub">{t('hero_sub')}</p>
            <div className="hero-actions">
              <Link to="/contact" className="btn-primary"><i className="ti ti-phone" /> {t('hero_cta_primary')}</Link>
              <a href="#services" className="btn-outline">{t('hero_cta_secondary')}</a>
            </div>
            <div className="stats-row">
              {[{num:'500+',key:'stat_clients'},{num:'12+',key:'stat_years'},{num:'30+',key:'stat_countries'},{num:'98%',key:'stat_satisfaction'}].map((s,i) => (
                <div key={i} className="stat-block">
                  {i > 0 && <div className="stat-divider" />}
                  <div className="stat-item">
                    <div className="stat-number">{s.num}</div>
                    <div className="stat-label">{t(s.key)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-right">
            <div className="services-card">
              <div className="services-card-header">{t('card_our_services')}</div>
              <div className="service-items">
                {SERVICE_ITEMS.map((s,i) => (
                  <div key={i} className="svc-item">
                    <div className="svc-icon" style={{background:s.bg}}><i className={`ti ${s.icon}`} style={{color:s.color}}/></div>
                    <div className="svc-info"><div className="svc-name">{t(s.nameKey)}</div><div className="svc-desc">{t(s.descKey)}</div></div>
                    <div className="svc-check" style={{background:s.bg}}><i className="ti ti-check" style={{color:s.color}}/></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}