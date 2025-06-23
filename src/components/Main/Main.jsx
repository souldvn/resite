import React, { useState } from 'react'
import s from './Main.module.css'

const slides = [
  {
    title: 'Telegram Mini Apps для бизнеса',
    subtitle: 'Создадим мощный инструмент для вашего бизнеса прямо в Telegram: готовые интернет-магазины с каталогами и оплатой, удобные системы онлайн-записи, автоматические CRM-интеграции с 1С, МойСклад и другими системами',
    image: '/images/main1.png'
  },
  {
    title: 'Telegram Mini Apps инструменты',
    subtitle: 'Создадим умного помощника для организации рутинных дел: финансовые трекеры, планировщики задач и другие полезные инструменты с искусственным интеллектом.',
    image: '/images/main2.png'
  },
  {
    title: 'Telegram Mini Apps игры',
    subtitle: 'Разработаем виртуального питомца, увлекательную мини-игру или собственную метавселенную. Знаем как сложную идею упаковать в простое решение.',
    image: '/images/main3.png'
  },
  {
    title: 'Telegram Mini Apps для вас',
    subtitle: 'Не нашли подходящий вариант или хотите что‑то по‑настоящему уникальное? Расскажите нам свою идею — мы разработаем индивидуальное решение специально для вас.',
    image: '/images/main4.png'
  }
]

const Main = () => {
  const [index, setIndex] = useState(0)

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const current = slides[index]

  const highlightTitle = (title) => {
  const parts = title.split(/(Telegram Mini Apps)/i)
  return parts.map((part, i) =>
    part.toLowerCase() === 'telegram mini apps' ? (
      <span key={i} className={s.highlight}>
        {part}
      </span>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  )
}


  return (
    <div id = "services" className="section">
      <div className={s.main}>
        <div className={s.carousel}>
          <div className={s.title}>
            <h2>
  {highlightTitle(current.title)}
</h2>

            <div className={s.change}>
              <button className={s.left} onClick={prevSlide}>
                <img src="/icons/arrowleft.svg" alt="arrow left" />
              </button>
              <p>{index + 1} из {slides.length}</p>
              <button className={s.right} onClick={nextSlide}>
                <img src="/icons/arrowright.svg" alt="arrow right" />
              </button>
            </div>
          </div>
          <div className={s.subtitle}>{current.subtitle}</div>
          <button className={s.button}>Обсудить проект</button>
        </div>
        <div className={s.image}>
          <img src={current.image} alt="main" />
        </div>
      </div>
    </div>
  )
}

export default Main
