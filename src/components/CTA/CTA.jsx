import { Link } from 'react-router-dom';
import './CTA.scss';
export default function CTA({ t, titleKey = 'cta_title', subKey = 'cta_sub' }) {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-inner">
                    <div className="cta-text"><h2>{t(titleKey)}</h2><p>{t(subKey)}</p></div>
                    <div className="cta-btns">
                        <Link to="/contact" className="btn-white">{t('cta_btn')}</Link>
                        <a href="tel:+998901234567" className="btn-ghost">+998 90 123 45 67</a>
                    </div>
                </div>
            </div>
        </section>
    );
}