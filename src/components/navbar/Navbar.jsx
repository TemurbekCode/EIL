import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar({ lang, setLang, t }) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <nav className="navbar">
      <div className="nav-inner container">

        {/* LOGO */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="logo-eil.jpg" className="logo-mark" alt="" />
          <div className="logo-text">
            Export Import <span>Logistics</span>
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="nav-links">
          <Link to="/" className="nav-link">{t("home")}</Link>
          <Link to="/education" className="nav-link">{t("education")}</Link>
          <Link to="/contact" className="nav-link">{t("contact")}</Link>
        </div>

        {/* RIGHT */}
        <div className="nav-right">
          <div className="lang-toggle">
            <button onClick={() => setLang("uz")} className={lang === "uz" ? "active" : ""}>UZ</button>
            <button onClick={() => setLang("ru")} className={lang === "ru" ? "active" : ""}>RU</button>
          </div>

          <Link to="/contact" className="btn-primary">
            {t("contact_btn")}
          </Link>
        </div>

        {/* BURGER */}
        <button className="burger" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {/* OVERLAY */}
      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={closeMenu}
      />

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>

        {/* CLOSE BTN */}
        <button className="close-btn" onClick={closeMenu}>
          ✕
        </button>

        <Link onClick={closeMenu} to="/" className="mobile-link">{t("home")}</Link>
        <Link onClick={closeMenu} to="/education" className="mobile-link">{t("education")}</Link>
        <Link onClick={closeMenu} to="/contact" className="mobile-link">{t("contact")}</Link>

        <div className="mobile-lang">
          <button onClick={() => setLang("uz")} className={lang === "uz" ? "active" : ""}>UZ</button>
          <button onClick={() => setLang("ru")} className={lang === "ru" ? "active" : ""}>RU</button>
        </div>

        <Link onClick={closeMenu} to="/contact" className="btn-primary mobile-btn">
          {t("contact_btn")}
        </Link>
      </div>
    </nav>
  );
}