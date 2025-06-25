import React from "react";
import s from "./Footer.module.css";
const Footer = () => {
  return (
    <div className="section">
        
      <div className={s.footer}>
        <div className={s.top}>
          <img className={s.logo} src="/icons/logo.svg" alt="logo"></img>
          <div className={s.links}>
            <div className={s.column}>
              <p>Ссылки</p>
              <ul className={s.opt}>
                <li>
                  <a href="#d">Обсудить партнёрство</a>
                </li>
                <li>
                  <a href="#d">Вакансии</a>
                </li>
                <li>
                  <a href="#p">Telegram канал про Telegram Mini Apps</a>
                </li>
              </ul>
            </div>
          </div>

          <div className={s.docs}>
            <div className={s.column}>
              <p>Документация</p>
              <ul className={s.opt}>
                <li>
                  <a href="#d">Документы</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={s.bottom}>
            <p>ИП Мусин Ринат Русланович</p>
            <p>ИНН: 026827652366/ОГРНИП: 324028000249396</p>
        </div> 
      </div>
    </div>
  );
};

export default Footer;
