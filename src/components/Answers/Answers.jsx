import React, { useState } from 'react';
import s from './Answers.module.css';

const Answers = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggle = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const questions = [
    'Что такое Telegram Mini Apps?',
    'Сколько времени занимает разработка?',
    'Как вы определяете стоимость проекта?',
    'Как именно вы помогаете с продвижением?',
    'Оказываете ли вы техническую поддержку?',
  ];

  const answers = [
    'Это приложения которые работают внутри Telegram. Они открываются внутри мессенджера, без скачивания отдельного приложения.',
    'Разработка занимает от 2 до 4 недель для быстрых решений (простые инструменты, каталоги, формы записи) до 3 месяцев для сложных проектов (интернет-магазины, CRM-системы, сервисы с личным кабинетом).',
    'Стоимость разработки Telegram Mini Apps определяется тремя ключевыми факторами: сложностью функционала, сроками выполнения и стадией проекта, на которой подключается наша команда.',
    'Мы даем бесплатные стартовые рекомендации по привлечению пользователей. При необходимости подключаем нашего маркетолога для разработки стратегии продвижения, настройки рекламы и аналитики или работаем вместе с вашей командой, подстраиваясь под ваши задачи и бюджет.',
    'После запуска вы получаете 1 месяц бесплатной поддержки: помогаем с настройкой, исправлением ошибок и базовой оптимизацией. Далее работаем в удобном формате: от регулярного сопровождения до развития проекта (новый функционал, улучшение интерфейса, масштабирование).',
  ];

  return (
    <div className="section" id="faq">
      <div className={s.answers}>
        <h2>Часто задаваемые вопросы</h2>
        <div className={s.blocks}>
          {questions.map((q, i) => (
            <div
              key={i}
              className={`${s.block} ${openIndexes.includes(i) ? s.open : ''}`}
              onClick={() => toggle(i)}
              style={{ cursor: 'pointer', flexDirection: 'column' }}
            >
              <div className={s.header}>
                <p>{q}</p>
                <img
                  className={s.img}
                  src="/icons/dropdown.svg"
                  alt="arrow"
                  style={{
                    transform: openIndexes.includes(i) ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                  }}
                />
              </div>
              <div className={s.answerWrapper}>
                <div className={s.answerInner}>
                  <p>{answers[i]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Answers;
