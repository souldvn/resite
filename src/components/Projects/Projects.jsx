import React, { useState, useRef } from "react";
import s from "./Projects.module.css";

const allCards = [
  {
    title: "SUN VILLrest",
    desc: "Бронирование столика и онлайн доставка из ресторана курортного парк-отеля",
    tags: ["Дизайн и проектирование", "Интернет магазин", "HoReCa"],
    link: "https://t.me/sunvillrest_bot",
    image: "/images/sunvillrest.jpg",
  },
  {
    title: "SmartSpend AI",
    desc: "Финансовый трекер и консультант с искусственным интеллектом для учёта расходов и накоплений.",
    tags: ["Дизайн и проектирование", "Финансовый трекер", "Инструменты"],
    link: "https://smartspend.ai",
    image: "/images/smartspendai.jpg",
  },
  {
    title: "Zodiacus",
    desc: "Гороскопы, игры и помощник с искусственным интеллектом для вашего знака зодиака",
    tags: ["Дизайн и проектирование", "Инструменты", "Игры"],
    link: "#",
    image: "/images/zodiacus.jpg",
  },
  {
    title: "Kitty",
    desc: "Виртуальный питомец с системой ухода и прокачки внутри Telegram приложения",
    tags: ["Дизайн и проектирование", "Тамагочи", "Игры"],
    link: "#",
    image: "/images/kitty.jpg",
  },
];

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState(allCards.slice(0, 2));
  const [showedAll, setShowedAll] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(null);

  const handleShowMore = () => {
    setVisibleCards(allCards);
    setShowedAll(true);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (delta > 50 && currentSlide < allCards.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else if (delta < -50 && currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <div className="section" id="projects">
      <div className={s.projects}>
        <h2>Проекты</h2>

        {/* Десктопные карточки */}
        <div className={s.cardsDesktop}>
          {visibleCards.map((card, index) => (
            <div className={s.card} key={index}>
              <div className={s.left}>
                <div className={s.expgroup}>
                  {card.tags.map((tag, i) => (
                    <div className={s.exp} key={i}>
                      {tag}
                    </div>
                  ))}
                </div>
                <div className={s.info}>
                  <h2>{card.title}</h2>
                  <p>{card.desc}</p>
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.link}
                  >
                    <button className={s.button}>
                      Смотреть кейс <img src="/icons/link.svg" alt="arrow" />
                    </button>
                  </a>
                </div>
              </div>
              <div className={s.right}>
                <img src={card.image} alt={card.title} />
              </div>
            </div>
          ))}

          {!showedAll && (
            <button className={s.buttonmore} onClick={handleShowMore}>
              Показать ещё
            </button>
          )}
        </div>

        {/* Мобильный слайдер */}
        <div
          className={s.slider}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={s.track}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {allCards.map((card, index) => (
              <div className={s.cardMobile} key={index}>
                <img src={card.image} alt={card.title} />
                <div className={s.left}>
                  <div className={s.expgroup}>
                    {card.tags
                      .filter((tag) => tag !== "Дизайн и проектирование")
                      .map((tag, i) => (
                        <div className={s.exp} key={i}>
                          {tag}
                        </div>
                      ))}
                  </div>
                  <div className={s.info}>
                    <div className={s.text}>
                      <h2>{card.title}</h2>
                      <p>{card.desc}</p>
                    </div>
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={s.link}
                    >
                      <button className={s.button}>
                        Смотреть кейс <img src="/icons/link.svg" alt="arrow" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Пагинация */}
        <div className={s.pagination}>
          {allCards.map((_, index) => (
            <div
              key={index}
              className={`${s.dot} ${index === currentSlide ? s.active : ""}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
