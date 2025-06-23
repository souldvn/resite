import React, { useState } from "react";
import s from "./Tell.module.css";

const Tell = () => {
  const [form, setForm] = useState({
    name: "",
    telegram: "",
    phone: "",
    email: "",
    agreePrivacy: false,
    agreeTelegram: false,
  });

  const [touched, setTouched] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const isValid = () => {
    return (
      form.name.trim() &&
      form.telegram.trim() &&
      form.phone.trim() &&
      form.email.trim() &&
      form.agreePrivacy &&
      form.agreeTelegram
    );
  };

  const showErrors = !isValid() && touched;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid()) {
      setTouched(true); // показать ошибки
    } else {
      alert("Форма отправлена!");
    }
  };

  return (
    <div className="section" id="contacts">
      <div className={s.tell}>
        <form className={s.form} onSubmit={handleSubmit} noValidate>
          <h2>Расскажите про свой проект</h2>
          <div className={s.fields}>
            <input
              type="text"
              name="name"
              placeholder="Имя"
              value={form.name}
              onChange={handleChange}
              className={showErrors && !form.name ? s.errorInput : ""}
            />
            <input
              type="text"
              name="telegram"
              placeholder="Telegram"
              value={form.telegram}
              onChange={handleChange}
              className={showErrors && !form.telegram ? s.errorInput : ""}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Номер телефона"
              value={form.phone}
              onChange={handleChange}
              className={showErrors && !form.phone ? s.errorInput : ""}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className={showErrors && !form.email ? s.errorInput : ""}
            />
          </div>

          <div className={s.checkbox}>
            <label className={s.allow}>
              <input
                type="checkbox"
                name="agreePrivacy"
                checked={form.agreePrivacy}
                onChange={handleChange}
              />
              <span>
                Я ознакомился с политикой конфиденциальности и даю согласие на обработку данных
              </span>
            </label>

            <label className={s.allow}>
              <input
                type="checkbox"
                name="agreeTelegram"
                checked={form.agreeTelegram}
                onChange={handleChange}
              />
              <span>Я даю согласие на отправку данных в Telegram</span>
            </label>
          </div>

          <div className={s.file}>
            <label className={s.fileLabel}>
              Прикрепить файл
              <input type="file" />
            </label>
            <p>(PDF, PNG, JPG, DOCX до 50 мб)</p>
          </div>

          <button
  type="submit"
  className={`${s.button} ${!isValid() ? s.disabledButton : ""}`}
  onClick={() => {
    if (!isValid()) setTouched(true);
  }}
>
  Отправить
</button>

        </form>

        <div className={s.contacts}>
          <div className={s.links}>
            <h2>Контакты</h2>
            <p>+7 999 757-04-99</p>
            <p>redigital.agency@gmail.com</p>
            <p>redigital.agency@yandex.ru</p>
          </div>
          <div className={s.telegram}>
            <h3>Написать в Telegram</h3>
            <p>
              Оставьте заявку — ответим вам в ближайшее время и предложим решение на бесплатной
              консультации
            </p>
            <button className={s.tg}>
              Связвться с нами <img src="/icons/tg.svg" alt="telegram" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tell;
