import React, { useState, useEffect } from "react";
import s from "./Header.module.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${s.header} ${scrolled ? s.scrolled : ""}`}>
      <div className="section">
        <div className={s.container}>
          <div>
            <img src="/icons/logo.svg" alt="logo" />
          </div>
          <nav className={s.options}>
            <ul>
              <li><a href="#home">Главная</a></li>
              <li><a href="#services">Услуги</a></li>
              <li><a href="#projects">Проекты</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contacts">Контакты</a></li>
            </ul>
          </nav>
          <button className={s.button}>Связаться с нами</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
