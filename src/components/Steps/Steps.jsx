import React from 'react'
import s from './Steps.module.css'

const Steps = () => {
  return (
    <div className='section'>
        <div className={s.steps}>
            <h2>Этапы разработки проекта</h2>
            <div className={s.cards}>
                <div className={s.card}>
                    <img src="/images/step1.jpg" alt="reason1"></img>
                    <div className={s.exp}>
                        <h3>Обсуждение проекта</h3>
                        <p>Собираем необходимые бизнес требования, формируем техническое задание и подписываем договор</p>
                    </div>
                    
                </div>
                <div className={s.card}>
                    <img src="/images/step2.jpg" alt="reason2"></img>
                    <div className={s.exp}>
                    <h3>UX/UI дизайн</h3>
                    <p>Собираем архитектуру, дизайн и интерфейс для вашего будущего приложения, подготавливая его к разработке</p>
                    </div>
                </div>
                <div className={s.card}>
                    <img src="/images/step3.jpg" alt="reason3"></img>
                    <div className={s.exp}>
                    <h3>Frontend и Backend разработка</h3>
                    <p>Пишем код для Telegram Mini Apps на основе интерфейса, собранного по вашим требованиям</p>
                    </div>
                </div>
                <div className={s.card}>
                    <img src="/images/step4.jpg" alt="reason4"></img>
                    <div className={s.exp}>
                    <h3>Тестирование и запуск проекта</h3>
                    <p>Проверяем приложение, запускаем и начинаем активно продвигать, встраивая его в ваши бизнес процессы</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Steps