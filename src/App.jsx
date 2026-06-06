import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import HomePage from './pages/HomePage';
import EducationPage from './pages/EducationPage';
import ContactPage from './pages/ContactPage';

import { useTranslation } from './i18n';
import './styles/global.scss';

export default function App() {
  const [lang, setLang] = useState(
    () => localStorage.getItem('eil_lang') || 'uz'
  );

  const handleSetLang = (l) => {
    setLang(l);
    localStorage.setItem('eil_lang', l);
  };

  const t = useTranslation(lang);

  return (
    <BrowserRouter>
      <Navbar lang={lang} setLang={handleSetLang} t={t} />

      <Routes>
        <Route path="/" element={<HomePage t={t} />} />
        <Route path="/education" element={<EducationPage t={t} />} />
        <Route path="/contact" element={<ContactPage t={t} />} />
      </Routes>

      <Footer t={t} />
    </BrowserRouter>
  );
}