import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar({ lang, setLang, t }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container nav-inner">

        {/* LOGO */}
        <Link to="/" className="logo">
          <img className="logo-mark" src="logo-eil.jpg" alt="" />
          <div className="logo-text">
            Export Import <span>Logistics</span>
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="nav-links">
          <Link to="/" className="nav-link">
            {t("home")}
          </Link>

          <Link to="/education" className="nav-link">
            {t("education")}
          </Link>

          <Link to="/contact" className="nav-link">
            {t("contact")}
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="nav-right">

          <div className="lang-toggle">
            <button
              className={`lang-btn ${lang === "uz" ? "active" : ""}`}
              onClick={() => setLang("uz")}
            >
              UZ
            </button>

            <button
              className={`lang-btn ${lang === "ru" ? "active" : ""}`}
              onClick={() => setLang("ru")}
            >
              RU
            </button>
          </div>

          <Link to="/contact" className="btn-primary btn-sm">
            {t("contact_btn")}
          </Link>
        </div>

        {/* BURGER */}
        <button
          className="burger"
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="mobile-menu open">
          <Link to="/" className="mobile-link" onClick={closeMenu}>
            {t("home")}
          </Link>

          <Link to="/education" className="mobile-link" onClick={closeMenu}>
            {t("education")}
          </Link>

          <Link to="/contact" className="mobile-link" onClick={closeMenu}>
            {t("contact")}
          </Link>
        </div>
      )}
    </nav>
  );
}