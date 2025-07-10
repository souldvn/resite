import React, { useRef, useState } from 'react'
import s from './Reason.module.css'

const cardsData = [
  {
    img: "/images/r1.jpg",
    title: "Кроссплатформенность",
    text: "Доступны на всех устройствах без установки, внутри Telegram. Поддерживаются iOS, Android, Windows, macOS"
  },
  {
    img: "/images/r2.jpg",
    title: "Популярность",
    text: "Telegram даёт доступ к 800+ млн активных пользователей по всему миру."
  },
  {
    img: "/images/r3.jpg",
    title: "Гибкость",
    text: "Легко интегрируются с любыми сервисами, платёжными системами, CRM и аналитикой"
  },
  {
    img: "/images/r4.jpg",
    title: "Быстрая разработка",
    text: "Без публикации в App Store и Google Play. Разработка приложения за 2–4 недели, экономия до 70% на запуске."
  }
]

const Reason = () => {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef(null)
  const touchEndX = useRef(null)

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX
    const delta = touchStartX.current - touchEndX.current

    if (delta > 50 && current < cardsData.length - 1) {
      setCurrent((prev) => prev + 1)
    } else if (delta < -50 && current > 0) {
      setCurrent((prev) => prev - 1)
    }
  }

  return (
    <div className="section">
      <div className={s.reason}>
        <h2>
          Почему <span className={s.highlight}>Telegram Mini Apps</span> отлично подойдёт для бизнеса?
        </h2>

        {/* Десктопная сетка */}
        <div className={s.cardsDesktop}>
          {cardsData.map((card, index) => (
            <div className={s.card} key={index}>
              <img src={card.img} alt={`reason${index}`} />
              <div className={s.exp}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Мобильная карусель */}
        <div
          className={s.slider}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={s.track}
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {cardsData.map((card, index) => (
              <div className={s.cardMobile} key={index}>
                <img src={card.img} alt={`reason${index}`} />
                <div className={s.exp}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Кастомная пагинация */}
        <div className={s.pagination}>
          {cardsData.map((_, index) => (
            <div
              key={index}
              className={`${s.dot} ${index === current ? s.active : ''}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Reason
