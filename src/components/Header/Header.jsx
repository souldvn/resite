import React, { useState, useEffect } from "react";
import s from "./Header.module.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={s.ellipse} />
      <header className={`${s.header} ${scrolled ? s.scrolled : ""}`}>
        <div className="section">
          <div className={s.container}>
            <a href="#home"><img src="/icons/logo.svg" alt="logo" className={s.logo} /></a>
            <nav className={s.options}>
              <ul>
                <li><a href="#home">Главная</a></li>
                <li><a href="#services">Услуги</a></li>
                <li><a href="#projects">Проекты</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contacts">Контакты</a></li>
              </ul>
            </nav>
            <a href="#contacts"><button className={s.button}>Связаться с нами</button></a>

            {/* Бургер / Крестик */}
            <button
              className={`${s.burgerBtn} ${menuOpen ? s.burgerBtnOpen : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <span className={s.closeIcon}>✕</span>
              ) : (
                <img src="/icons/burger.svg" alt="menu" />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
  <div className={s.mobileMenu}>
    <div className={s.mobileContent}>
      <img src="/icons/logo.svg" alt="logo" className={s.mobileLogo} />
      <ul>
        <li><a href="#home" onClick={() => setMenuOpen(false)}>Главная</a></li>
        <li><a href="#services" onClick={() => setMenuOpen(false)}>Услуги</a></li>
        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Проекты</a></li>
        <li><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a></li>
        <li><a href="#contacts" onClick={() => setMenuOpen(false)}>Контакты</a></li>
      </ul>
      <a href="#contacts"><button className={s.mobileButton}>Обсудить проект</button></a>
    </div>
  </div>
)}

      </header>
    </>
  );
};

export default Header;
