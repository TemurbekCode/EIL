import { Link } from 'react-router-dom';
import './Services.scss';

const CARDS = [
  { accent:'#1A4FAF', iconBg:'#EBF3FF', icon:'ti-world-upload',    badgeBg:'#EBF3FF', badgeColor:'#0C3E8A', badgeKey:'svc_export',    titleKey:'svc_export_title',    descKey:'svc_export_long' },
  { accent:'#0F6E56', iconBg:'#E6F9F2', icon:'ti-world-download',  badgeBg:'#E6F9F2', badgeColor:'#085041', badgeKey:'svc_import',    titleKey:'svc_import_title',    descKey:'svc_import_long' },
  { accent:'#854F0B', iconBg:'#FFF4E6', icon:'ti-truck-delivery',  badgeBg:'#FFF4E6', badgeColor:'#633806', badgeKey:'svc_logistics', titleKey:'svc_logistics_title', descKey:'svc_logistics_long' },
  { accent:'#993C1D', iconBg:'#FFF0EB', icon:'ti-file-certificate',badgeBg:'#FFF0EB', badgeColor:'#712B13', badgeKey:'svc_customs',   titleKey:'svc_customs_title',   descKey:'svc_customs_long' },
];

export default function Services({ t }) {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">{t('services_eyebrow')}</div>
          <h2 className="section-title">{t('services_title')}</h2>
          <p className="section-sub">{t('services_sub')}</p>
        </div>
        <div className="services-grid">
          {CARDS.map((c,i) => (
            <div key={i} className="service-card" style={{'--accent':c.accent}}>
              <div className="sc-icon-wrap" style={{background:c.iconBg}}><i className={`ti ${c.icon}`} style={{color:c.accent}} /></div>
              <div className="sc-badge" style={{background:c.badgeBg,color:c.badgeColor}}>{t(c.badgeKey)}</div>
              <h3>{t(c.titleKey)}</h3>
              <p>{t(c.descKey)}</p>
              <Link to="/contact" className="sc-link" style={{color:c.accent}}>{t('read_more')} <i className="ti ti-arrow-right" /></Link>
            </div>
          ))}
        </div>
        <div className="edu-banner">
          <div className="edu-banner-left">
            <div className="sc-icon-wrap" style={{background:'#F0EEFF',width:52,height:52}}><i className="ti ti-school" style={{color:'#534AB7',fontSize:24}} /></div>
            <div>
              <div className="sc-badge" style={{background:'#F0EEFF',color:'#3C3489',marginBottom:8}}>{t('svc_edu')}</div>
              <h3>{t('edu_banner_title')}</h3>
              <p>{t('edu_banner_desc')}</p>
            </div>
          </div>
          <Link to="/education" className="btn-primary" style={{background:'#534AB7',flexShrink:0}}>
            {t('edu_banner_cta')} <i className="ti ti-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}