import { Link } from 'react-router-dom';
import './EducationPage.scss';

const COURSES = [
    {
        headerBg: 'linear-gradient(135deg, #1A4FAF, #2563EB)',
        icon: 'ti-certificate',
        levelKey: 'level_beginner',
        titleKey: 'course1_title',
        descKey: 'course1_desc',
        topics: ['course1_t1', 'course1_t2', 'course1_t3', 'course1_t4'],
        duration: '4',
        students: '20',
        price: '1 200 000',
    },
    {
        headerBg: 'linear-gradient(135deg, #0F6E56, #1D9E75)',
        icon: 'ti-truck',
        levelKey: 'level_mid',
        titleKey: 'course2_title',
        descKey: 'course2_desc',
        topics: ['course2_t1', 'course2_t2', 'course2_t3', 'course2_t4'],
        duration: '8',
        students: '15',
        price: '2 500 000',
        featured: true,
    },
    {
        headerBg: 'linear-gradient(135deg, #854F0B, #BA7517)',
        icon: 'ti-file-certificate',
        levelKey: 'level_pro',
        titleKey: 'course3_title',
        descKey: 'course3_desc',
        topics: ['course3_t1', 'course3_t2', 'course3_t3', 'course3_t4'],
        duration: '6',
        students: '12',
        price: '2 000 000',
    },
    {
        headerBg: 'linear-gradient(135deg, #993C1D, #D85A30)',
        icon: 'ti-building-warehouse',
        levelKey: 'level_mid',
        titleKey: 'course4_title',
        descKey: 'course4_desc',
        topics: ['course4_t1', 'course4_t2', 'course4_t3', 'course4_t4'],
        duration: '5',
        students: '18',
        price: '1 800 000',
    },
];

const WHY_ITEMS = [
    { icon: 'ti-users', num: '01', titleKey: 'why_study1_title', descKey: 'why_study1_desc' },
    { icon: 'ti-certificate-2', num: '02', titleKey: 'why_study2_title', descKey: 'why_study2_desc' },
    { icon: 'ti-briefcase', num: '03', titleKey: 'why_study3_title', descKey: 'why_study3_desc' },
    { icon: 'ti-chart-line', num: '04', titleKey: 'why_study4_title', descKey: 'why_study4_desc' },
];

const STEPS = [
    { num: '01', titleKey: 'step1_title', descKey: 'step1_desc' },
    { num: '02', titleKey: 'step2_title', descKey: 'step2_desc' },
    { num: '03', titleKey: 'step3_title', descKey: 'step3_desc' },
    { num: '04', titleKey: 'step4_title', descKey: 'step4_desc' },
];

export default function Education({ t }) {
    return (
        <main className="edu-page">

            {/* ── HERO ── */}
            <section className="edu-hero">
                <div className="container">
                    <div className="edu-hero-inner">
                        <div className="edu-hero-left">
                            <div className="edu-badge">
                                <i className="ti ti-school" />
                                {t('edu_badge')}
                            </div>
                            <h1>
                                {t('edu_hero_title1')}
                                <em> {t('edu_hero_title2')}</em>
                            </h1>
                            <p>{t('edu_hero_sub')}</p>
                            <div className="edu-hero-btns">
                                <a href="#courses" className="btn-primary">
                                    <i className="ti ti-arrow-down" /> {t('edu_see_courses')}
                                </a>
                                <Link to="/contact" className="btn-outline">
                                    {t('get_consultation')}
                                </Link>
                            </div>
                        </div>
                        <div className="edu-hero-right">
                            <div className="edu-stats-card">
                                {[
                                    { num: '1000+', labelKey: 'edu_stat_graduates', icon: 'ti-users', color: '#EBF3FF', iconColor: '#1A4FAF' },
                                    { num: '15+', labelKey: 'edu_stat_courses', icon: 'ti-book', color: '#E6F9F2', iconColor: '#0F6E56' },
                                    { num: '95%', labelKey: 'edu_stat_employed', icon: 'ti-briefcase', color: '#F0EEFF', iconColor: '#534AB7' },
                                    { num: '10+', labelKey: 'edu_stat_teachers', icon: 'ti-award', color: '#FFF4E6', iconColor: '#854F0B' },
                                ].map((s, i) => (
                                    <div key={i} className="edu-stat-item">
                                        <div className="edu-stat-icon" style={{ background: s.color }}>
                                            <i className={`ti ${s.icon}`} style={{ color: s.iconColor }} />
                                        </div>
                                        <div>
                                            <div className="edu-stat-num">{s.num}</div>
                                            <div className="edu-stat-label">{t(s.labelKey)}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHY US ── */}
            <section className="edu-why">
                <div className="container">
                    <div className="section-eyebrow">{t('why_us_eyebrow')}</div>
                    <h2 className="section-title">{t('why_study_title')}</h2>
                    <div className="edu-why-grid">
                        {WHY_ITEMS.map((w, i) => (
                            <div key={i} className="edu-why-card">
                                <div className="ewc-top">
                                    <div className="ewc-num">{w.num}</div>
                                    <i className={`ti ${w.icon} ewc-icon`} />
                                </div>
                                <div className="ewc-title">{t(w.titleKey)}</div>
                                <div className="ewc-desc">{t(w.descKey)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── COURSES ── */}
            <section className="edu-courses" id="courses">
                <div className="container">
                    <div className="section-eyebrow">{t('courses_eyebrow')}</div>
                    <h2 className="section-title">{t('courses_title')}</h2>
                    <p className="section-sub">{t('courses_sub')}</p>

                    <div className="courses-grid">
                        {COURSES.map((c, i) => (
                            <div key={i} className={`course-card${c.featured ? ' featured' : ''}`}>
                                {c.featured && (
                                    <div className="featured-ribbon">
                                        <i className="ti ti-star-filled" /> {t('featured')}
                                    </div>
                                )}
                                <div className="course-header" style={{ background: c.headerBg }}>
                                    <i className={`ti ${c.icon}`} />
                                    <div className="course-level-badge">{t(c.levelKey)}</div>
                                </div>
                                <div className="course-body">
                                    <h3>{t(c.titleKey)}</h3>
                                    <p className="course-desc">{t(c.descKey)}</p>

                                    <ul className="course-topics">
                                        {c.topics.map((tk, j) => (
                                            <li key={j}>
                                                <i className="ti ti-check" />
                                                {t(tk)}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="course-meta">
                                        <span><i className="ti ti-clock" /> {c.duration} {t('weeks')}</span>
                                        <span><i className="ti ti-users" /> {t('max')} {c.students}</span>
                                        <span><i className="ti ti-certificate" /> {t('certificate')}</span>
                                    </div>

                                    <div className="course-footer">
                                        <div className="course-price">
                                            {c.price}
                                            <span>UZS / {t('per_month')}</span>
                                        </div>
                                        <Link to="/contact" className="btn-primary btn-sm">
                                            {t('enroll')} <i className="ti ti-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── HOW IT WORKS ── */}
            <section className="edu-steps">
                <div className="container">
                    <div className="section-eyebrow">{t('steps_eyebrow')}</div>
                    <h2 className="section-title">{t('steps_title')}</h2>
                    <div className="steps-row">
                        {STEPS.map((s, i) => (
                            <div key={i} className="step-card">
                                <div className="step-num">{s.num}</div>
                                {i < STEPS.length - 1 && <div className="step-arrow"><i className="ti ti-arrow-right" /></div>}
                                <div className="step-title">{t(s.titleKey)}</div>
                                <div className="step-desc">{t(s.descKey)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA BANNER ── */}
            <section className="edu-cta">
                <div className="container">
                    <div className="edu-cta-inner">
                        <div className="edu-cta-left">
                            <h2>{t('edu_cta_title')}</h2>
                            <p>{t('edu_cta_sub')}</p>
                        </div>
                        <div className="edu-cta-btns">
                            <Link to="/contact" className="btn-white">
                                <i className="ti ti-phone" /> {t('get_consultation')}
                            </Link>
                            <a href="https://t.me/eillogistics" target="_blank" rel="noreferrer" className="btn-ghost">
                                <i className="ti ti-brand-telegram" /> Telegram
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}