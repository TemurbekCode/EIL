import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import "./Navbar.scss";

export default function Navbar({ lang, setLang, t }) {
  const [open, setOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <nav className="navbar">
      <div className="nav-inner container">

        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="logo-eil.jpg" className="logo-mark" alt="" />

          <div className="logo-text">
            Export Import <span>Logistics</span>
          </div>
        </Link>

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

        <div className="nav-right">
          <div className="lang-toggle">
            <button
              onClick={() => setLang("uz")}
              className={lang === "uz" ? "active" : ""}
            >
              UZ
            </button>

            <button
              onClick={() => setLang("ru")}
              className={lang === "ru" ? "active" : ""}
            >
              RU
            </button>
          </div>

          <button
            className="theme-btn"
            onClick={toggleTheme}
          >
            {theme === "light" ? <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M12.2 22c4.53 0 8.45-2.91 9.76-7.24a1.002 1.002 0 0 0-1.25-1.25c-.78.23-1.58.35-2.38.35-4.52 0-8.2-3.68-8.2-8.2 0-.8.12-1.6.35-2.38.11-.35.01-.74-.25-1s-.64-.36-1-.25A10.17 10.17 0 0 0 2 11.8C2 17.42 6.57 22 12.2 22M8.18 4.65c-.03.34-.05.68-.05 1.02 0 5.62 4.57 10.2 10.2 10.2.34 0 .68-.02 1.02-.05C17.93 18.38 15.23 20 12.2 20 7.68 20 4 16.32 4 11.8a8.15 8.15 0 0 1 4.18-7.15"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M12 17.01c2.76 0 5.01-2.25 5.01-5.01S14.76 6.99 12 6.99 6.99 9.24 6.99 12s2.25 5.01 5.01 5.01M12 9c1.66 0 3.01 1.35 3.01 3.01s-1.35 3.01-3.01 3.01-3.01-1.35-3.01-3.01S10.34 9 12 9m1 10h-2v3h2zm0-17h-2v3h2zM2 11h3v2H2zm17 0h3v2h-3zM4.22 18.36l.71.71.71.71 1.06-1.06 1.06-1.06-.71-.71-.71-.71-1.06 1.06zM19.78 5.64l-.71-.71-.71-.71-1.06 1.06-1.06 1.06.71.71.71.71 1.06-1.06zm-12.02.7L6.7 5.28 5.64 4.22l-.71.71-.71.71L5.28 6.7l1.06 1.06.71-.71zm8.48 11.32 1.06 1.06 1.06 1.06.71-.71.71-.71-1.06-1.06-1.06-1.06-.71.71z"></path></svg>}
          </button>

          <Link to="/contact" className="btn-primary">
            {t("contact_btn")}
          </Link>
        </div>

        <button className="burger" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={closeMenu}
      />

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <button
          className="close-btn"
          onClick={closeMenu}
        >
          ✕
        </button>

        <Link
          onClick={closeMenu}
          to="/"
          className="mobile-link"
        >
          {t("home")}
        </Link>

        <Link
          onClick={closeMenu}
          to="/education"
          className="mobile-link"
        >
          {t("education")}
        </Link>

        <Link
          onClick={closeMenu}
          to="/contact"
          className="mobile-link"
        >
          {t("contact")}
        </Link>

        <div className="mobile-lang">
          <button
            onClick={() => setLang("uz")}
            className={lang === "uz" ? "active" : ""}
          >
            UZ
          </button>

          <button
            onClick={() => setLang("ru")}
            className={lang === "ru" ? "active" : ""}
          >
            RU
          </button>
        </div>

        <button
          className="theme-btn mobile-theme"
          onClick={toggleTheme}
        >
          {theme === "light"
            ? <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M12.2 22c4.53 0 8.45-2.91 9.76-7.24a1.002 1.002 0 0 0-1.25-1.25c-.78.23-1.58.35-2.38.35-4.52 0-8.2-3.68-8.2-8.2 0-.8.12-1.6.35-2.38.11-.35.01-.74-.25-1s-.64-.36-1-.25A10.17 10.17 0 0 0 2 11.8C2 17.42 6.57 22 12.2 22M8.18 4.65c-.03.34-.05.68-.05 1.02 0 5.62 4.57 10.2 10.2 10.2.34 0 .68-.02 1.02-.05C17.93 18.38 15.23 20 12.2 20 7.68 20 4 16.32 4 11.8a8.15 8.15 0 0 1 4.18-7.15"></path></svg>
            : <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox={"0 0 24 24"}>{/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M12 17.01c2.76 0 5.01-2.25 5.01-5.01S14.76 6.99 12 6.99 6.99 9.24 6.99 12s2.25 5.01 5.01 5.01M12 9c1.66 0 3.01 1.35 3.01 3.01s-1.35 3.01-3.01 3.01-3.01-1.35-3.01-3.01S10.34 9 12 9m1 10h-2v3h2zm0-17h-2v3h2zM2 11h3v2H2zm17 0h3v2h-3zM4.22 18.36l.71.71.71.71 1.06-1.06 1.06-1.06-.71-.71-.71-.71-1.06 1.06zM19.78 5.64l-.71-.71-.71-.71-1.06 1.06-1.06 1.06.71.71.71.71 1.06-1.06zm-12.02.7L6.7 5.28 5.64 4.22l-.71.71-.71.71L5.28 6.7l1.06 1.06.71-.71zm8.48 11.32 1.06 1.06 1.06 1.06.71-.71.71-.71-1.06-1.06-1.06-1.06-.71.71z"></path></svg>}
        </button>

        <Link
          onClick={closeMenu}
          to="/contact"
          className="btn-primary mobile-btn"
        >
          {t("contact_btn")}
        </Link>
      </div>
    </nav>
  );
}