import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="logo">
            <img className="logo-mark" src="logo-eil.jpg" />
            <div className="logo-text">
              Export Import <span>Logistics</span>
            </div>
          </div>
          <p>{t("bridge")}</p>
        </div>

        <div className="footer-links-col">
          <div className="footer-col-title">{t("services_footer")}</div>
          <a href="#services">{t("export_help")}</a>
          <a href="#services">{t("import_help")}</a>
          <a href="#services">{t("logistics")}</a>
          <a href="#services">{t("customs")}</a>
        </div>

        <div className="footer-links-col">
          <div className="footer-col-title">{t("company")}</div>
          <Link to="/education">{t("education_courses")}</Link>
          <Link to="/contact">{t("contact")}</Link>
        </div>

        <div className="footer-links-col">
          <div className="footer-col-title">{t("contact_footer")}</div>
          <a href="tel:+998901234567">+998 90 123 45 67</a>
          <a href="mailto:info@eil.uz">info@eil.uz</a>
          <a href="https://t.me/eillogistics" target="_blank" rel="noreferrer">
            Telegram
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span>{t("copyright")}</span>
        </div>
      </div>
    </footer>
  );
}