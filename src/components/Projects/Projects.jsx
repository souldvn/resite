import React, { useState } from "react";
import s from "./Projects.module.css";

const initialCards = [
  {
    title: "SUN VILLrest",
    desc: "Бронирование столика и онлайн доставка из ресторана курортного парк-отеля",
    tags: ["Дизайн и проектирование", "Интернет магазин", "HoReCa"],
    link: "https://sunvillrest.com",
    image: "/images/sunvillrest.jpg",
  },
  {
    title: "SmartSpend AI",
    desc: "Финансовый трекер и консультант с искусственным интеллектом для учёта расходов и накоплений.",
    tags: ["Дизайн и проектирование", "Финансовый трекер", "Искусственный интеллект"],
    link: "https://smartspend.ai",
    image: "/images/smartspendai.jpg",
  },
];

const extraCards = [
  {
    title: "Zodiacus",
    desc: "Гороскопы, игры и помощник с искусственным интеллектом для вашего знака зодиака",
    tags: ["Дизайн и проектирование", "Искусственный интеллект", "Игры"],
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
  const [cards, setCards] = useState(initialCards);
  const [showedAll, setShowedAll] = useState(false);

  const handleShowMore = () => {
    setCards([...cards, ...extraCards]);
    setShowedAll(true);
  };

  return (
    <div className="section" id="projects">
      <div className={s.projects}>
        <h2>Проекты</h2>
        <div className={s.cards}>
          {cards.map((card, index) => (
            <div className={s.card} key={index}>
              <div className={s.left}>
                <div className={s.expgroup}>
                  {card.tags.map((tag, i) => (
                    <div className={s.exp} key={i}>{tag}</div>
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
        </div>

        {!showedAll && (
          <button className={s.buttonmore} onClick={handleShowMore}>
            Показать ещё
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;
