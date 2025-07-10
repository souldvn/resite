import React, { useState, useRef, useEffect } from 'react';
import s from './Steps.module.css';

const stepsData = [
  {
    img: "/images/step1.jpg",
    title: "Обсуждение проекта",
    desc: "Собираем необходимые бизнес требования, формируем техническое задание и подписываем договор",
  },
  {
    img: "/images/step2.jpg",
    title: "UX/UI дизайн",
    desc: "Собираем архитектуру, дизайн и интерфейс для вашего будущего приложения, подготавливая его к разработке",
  },
  {
    img: "/images/step3.jpg",
    title: "Frontend и Backend разработка",
    desc: "Пишем код для Telegram Mini Apps на основе интерфейса, собранного по вашим требованиям",
  },
  {
    img: "/images/step4.jpg",
    title: "Тестирование и запуск проекта",
    desc: "Проверяем приложение, запускаем и начинаем активно продвигать, встраивая его в ваши бизнес процессы",
  },
];

const Steps = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const delta = touchStartX.current - touchEndX.current;

    if (delta > 50 && currentIndex < stepsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (delta < -50 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const scrollToIndex = (index) => {
    if (sliderRef.current) {
      const width = sliderRef.current.offsetWidth;
      sliderRef.current.style.transform = `translateX(-${index * width}px)`;
    }
  };

  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex]);

  return (
    <div className="section">
      <div className={s.steps}>
        <h2>Этапы разработки проекта</h2>

        {/* Десктопная сетка */}
        <div className={s.cardsDesktop}>
          {stepsData.map((step, i) => (
            <div className={s.card} key={i}>
              <img src={step.img} alt={`step-${i}`} />
              <div className={s.exp}>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Мобильный слайдер */}
        <div className={s.sliderWrapper}>
          <div
            className={s.sliderContainer}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className={s.slider} ref={sliderRef}>
              {stepsData.map((step, i) => (
                <div className={s.slide} key={i}>
                  <img src={step.img} alt={`slide-${i}`} />
                  <div className={s.exp}>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={s.pagination}>
            {stepsData.map((_, i) => (
              <div
                key={i}
                className={`${s.dot} ${currentIndex === i ? s.active : ''}`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
