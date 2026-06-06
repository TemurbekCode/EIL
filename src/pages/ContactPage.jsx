import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.scss';

const INFO_CARDS = [
    {
        href: 'tel:+998901234567',
        icon: 'ti-phone',
        iconBg: '#EBF3FF',
        iconColor: '#1A4FAF',
        labelKey: 'contact_phone',
        value: '+998 90 123 45 67',
    },
    {
        href: 'https://t.me/eillogistics',
        icon: 'ti-brand-telegram',
        iconBg: '#E6F9F2',
        iconColor: '#0F6E56',
        labelKey: 'contact_telegram',
        value: '@eillogistics',
    },
    {
        href: 'https://instagram.com/eil_logistics',
        icon: 'ti-brand-instagram',
        iconBg: '#FFF0EB',
        iconColor: '#993C1D',
        labelKey: 'contact_instagram',
        value: '@eil_logistics',
    },
    {
        href: 'https://t.me/eilbot',
        icon: 'ti-robot',
        iconBg: '#F0EEFF',
        iconColor: '#534AB7',
        labelKey: 'contact_bot',
        value: '@eil_bot',
    },
    {
        href: 'mailto:info@eil.uz',
        icon: 'ti-mail',
        iconBg: '#FFF4E6',
        iconColor: '#854F0B',
        labelKey: 'contact_email',
        value: 'info@eil.uz',
    },
    {
        href: null,
        icon: 'ti-map-pin',
        iconBg: '#F5F7FA',
        iconColor: '#5C6A7A',
        labelKey: 'contact_address',
        valueKey: 'address_value',
    },
];

const SERVICES = ['svc_export', 'svc_import', 'svc_logistics', 'svc_customs', 'svc_edu'];

export default function Contact({ t }) {
    const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
    const [errors, setErrors] = useState({});
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) =>
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const handleSubmit = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = true;
        if (!form.phone.trim()) errs.phone = true;
        if (Object.keys(errs).length) { setErrors(errs); return; }

        setErrors({});
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSent(true);
            setForm({ name: '', phone: '', service: '', message: '' });
            setTimeout(() => setSent(false), 6000);
        }, 1200);
    };

    return (
        <main className="contact-page">

            {/* ── HERO ── */}
            <section className="contact-hero">
                <div className="container">
                    <div className="contact-hero-inner">
                        <div className="ch-badge">
                            <i className="ti ti-headset" /> {t('contact_eyebrow')}
                        </div>
                        <h1>
                            {t('contact_title1')}
                            <em> {t('contact_title2')}</em>
                        </h1>
                        <p>{t('contact_hero_sub')}</p>
                    </div>
                </div>
            </section>

            {/* ── MAIN GRID ── */}
            <section className="contact-main">
                <div className="container contact-grid">

                    {/* LEFT — info + channels */}
                    <div className="contact-left">

                        {/* Quick channels */}
                        <div className="channel-cards">
                            <div className="channel-title">{t('contact_channels_title')}</div>
                            <div className="channel-grid">
                                {INFO_CARDS.map((c, i) => {
                                    const inner = (
                                        <div className="channel-card">
                                            <div className="cc-icon" style={{ background: c.iconBg }}>
                                                <i className={`ti ${c.icon}`} style={{ color: c.iconColor }} />
                                            </div>
                                            <div className="cc-info">
                                                <div className="cc-label">{t(c.labelKey) || c.labelKey}</div>
                                                <div className="cc-value">{c.value || t(c.valueKey)}</div>
                                            </div>
                                            {c.href && (
                                                <i className="ti ti-arrow-up-right cc-arrow" />
                                            )}
                                        </div>
                                    );
                                    return c.href ? (
                                        <a
                                            key={i}
                                            href={c.href}
                                            target={c.href.startsWith('http') ? '_blank' : undefined}
                                            rel="noreferrer"
                                            className="channel-card-link"
                                        >
                                            {inner}
                                        </a>
                                    ) : (
                                        <div key={i}>{inner}</div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Working hours */}
                        <div className="working-hours">
                            <div className="wh-header">
                                <i className="ti ti-clock wh-icon" />
                                <span>{t('working_hours')}</span>
                            </div>
                            <div className="wh-rows">
                                <div className="wh-row">
                                    <span>{t('wh_weekdays')}</span>
                                    <span className="wh-time">09:00 — 18:00</span>
                                </div>
                                <div className="wh-row">
                                    <span>{t('wh_saturday')}</span>
                                    <span className="wh-time">10:00 — 15:00</span>
                                </div>
                                <div className="wh-row">
                                    <span>{t('wh_sunday')}</span>
                                    <span className="wh-time wh-off">{t('wh_day_off')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Free consultation badge */}
                        <div className="free-badge">
                            <i className="ti ti-gift" />
                            <div>
                                <div className="free-badge-title">{t('free_consult_title')}</div>
                                <div className="free-badge-desc">{t('free_consult_desc')}</div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT — form */}
                    <div className="contact-right">
                        <div className="contact-form-card">
                            <div className="form-card-header">
                                <h2>{t('form_title')}</h2>
                                <p>{t('form_sub')}</p>
                            </div>

                            <div className="form-body">
                                {/* Name */}
                                <div className={`form-group${errors.name ? ' error' : ''}`}>
                                    <label>
                                        {t('form_name')} <span className="required">*</span>
                                    </label>
                                    <div className="input-wrap">
                                        <i className="ti ti-user input-icon" />
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder={t('form_name_ph')}
                                        />
                                    </div>
                                    {errors.name && <div className="field-error">{t('field_required')}</div>}
                                </div>

                                {/* Phone */}
                                <div className={`form-group${errors.phone ? ' error' : ''}`}>
                                    <label>
                                        {t('form_phone')} <span className="required">*</span>
                                    </label>
                                    <div className="input-wrap">
                                        <i className="ti ti-phone input-icon" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="+998 __ ___ __ __"
                                        />
                                    </div>
                                    {errors.phone && <div className="field-error">{t('field_required')}</div>}
                                </div>

                                {/* Service */}
                                <div className="form-group">
                                    <label>{t('form_service')}</label>
                                    <div className="input-wrap select-wrap">
                                        <i className="ti ti-list input-icon" />
                                        <select name="service" value={form.service} onChange={handleChange}>
                                            <option value="">{t('form_service_placeholder')}</option>
                                            {SERVICES.map((s) => (
                                                <option key={s} value={s}>{t(s)}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="form-group">
                                    <label>{t('form_message')}</label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder={t('form_message_ph')}
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    className={`btn-submit${loading ? ' loading' : ''}`}
                                    onClick={handleSubmit}
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <><i className="ti ti-loader-2 spin" /> {t('form_sending')}</>
                                    ) : (
                                        <><i className="ti ti-send" /> {t('form_submit')}</>
                                    )}
                                </button>

                                <p className="form-note">
                                    <i className="ti ti-lock" /> {t('form_note')}
                                </p>

                                {/* Success */}
                                {sent && (
                                    <div className="success-msg">
                                        <i className="ti ti-circle-check" />
                                        <div>
                                            <div className="success-title">{t('form_success_title')}</div>
                                            <div className="success-desc">{t('form_success')}</div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="contact-faq">
                <div className="container">
                    <div className="section-eyebrow">{t('faq_eyebrow')}</div>
                    <h2 className="section-title">{t('faq_title')}</h2>
                    <div className="faq-grid">
                        {[1, 2, 3, 4].map((n) => (
                            <div key={n} className="faq-card">
                                <div className="faq-q">
                                    <i className="ti ti-help-circle" />
                                    {t(`faq${n}_q`)}
                                </div>
                                <div className="faq-a">{t(`faq${n}_a`)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}