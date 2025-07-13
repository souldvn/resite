import React, { useState, useRef } from "react";
import s from "./Main.module.css";

const slides = [
  {
    title: "Telegram Mini Apps для бизнеса",
    subtitle:
      "Создадим мощный инструмент для вашего бизнеса прямо в Telegram: готовые интернет-магазины с каталогами и оплатой, удобные системы онлайн-записи, автоматические CRM-интеграции с 1С, МойСклад и другими системами",
    image: "/images/main1.jpg",
  },
  {
    title: "Telegram Mini Apps инструменты",
    subtitle:
      "Создадим умного помощника для организации рутинных дел: финансовые трекеры, планировщики задач и другие полезные инструменты с искусственным интеллектом.",
    image: "/images/main2.jpg",
  },
  {
    title: "Telegram Mini Apps игры",
    subtitle:
      "Разработаем виртуального питомца, увлекательную мини-игру или собственную метавселенную. Знаем, как сложную идею упаковать в простое и эффективное решение.",
    image: "/images/main3.jpg",
  },
  {
    title: "Telegram Mini Apps для вас",
    subtitle:
      "Не нашли подходящий вариант или хотите что‑то по‑настоящему уникальное? Расскажите нам свою идею — мы разработаем индивидуальное решение специально для вас.",
    image: "/images/main4.jpg",
  },
];

const Main = () => {
  const [index, setIndex] = useState(0);
  const startX = useRef(null);
  const isDragging = useRef(false);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const diff = e.touches[0].clientX - startX.current;
    if (Math.abs(diff) > 50) {
      if (diff < 0 && index < slides.length - 1) {
        setIndex((prev) => prev + 1);
      } else if (diff > 0 && index > 0) {
        setIndex((prev) => prev - 1);
      }
      isDragging.current = false;
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const highlightTitle = (title) => {
    const parts = title.split(/(Telegram Mini Apps)/i);
    return parts.map((part, i) =>
      part.toLowerCase() === "telegram mini apps" ? (
        <span key={i} className={s.highlight}>
          {part}
        </span>
      ) : (
        <React.Fragment key={i}>{part}</React.Fragment>
      )
    );
  };

  const current = slides[index];

  return (
    <div id="services" className="section">
      <div
        className={s.main}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={s.image}>
          <img src={current.image} alt="main" />
        </div>
        <div className={s.carousel}>
          <div className={s.title}>
            <h2>{highlightTitle(current.title)}</h2>
            <div className={`${s.change} ${s.desktopOnly}`}>
              <button
                className={`${s.left} ${index === 0 ? s.disabled : ""}`}
                onClick={() => setIndex((prev) => Math.max(0, prev - 1))}
                disabled={index === 0}
              >
                <img src="/icons/arrowleft.svg" alt="arrow left" />
              </button>
              <p>
                {index + 1} из {slides.length}
              </p>
              <button
                className={`${s.right} ${
                  index === slides.length - 1 ? s.disabled : ""
                }`}
                onClick={() =>
                  setIndex((prev) => Math.min(slides.length - 1, prev + 1))
                }
                disabled={index === slides.length - 1}
              >
                <img src="/icons/arrowright.svg" alt="arrow right" />
              </button>
            </div>
          </div>
          <div className={s.subtitle}>{current.subtitle}</div>
          <a className={s.link} href="#contacts">
            <button className={s.button}>Обсудить проект</button>
          </a>
        </div>
      </div>

      {/* Пагинация строго под .main */}
      <div className={s.pagination}>
        {slides.map((_, i) => (
          <div
            key={i}
            className={`${s.dot} ${i === index ? s.active : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
