import './WhyUs.scss';
const ITEMS = [
  { icon:'ti-shield-check', titleKey:'why_reliable', descKey:'why_reliable_desc' },
  { icon:'ti-clock',        titleKey:'why_fast',     descKey:'why_fast_desc' },
  { icon:'ti-headset',      titleKey:'why_support',  descKey:'why_support_desc' },
  { icon:'ti-world',        titleKey:'why_global',   descKey:'why_global_desc' },
];
export default function WhyUs({ t }) {
  return (
    <section className="why-section">
      <div className="container">
        <div className="why-grid">
          {ITEMS.map((item,i) => (
            <div key={i} className="why-item">
              <i className={`ti ${item.icon} why-icon`} />
              <div className="why-title">{t(item.titleKey)}</div>
              <div className="why-desc">{t(item.descKey)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}