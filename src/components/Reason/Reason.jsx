import React from 'react'
import s from './Reason.module.css'

const Reason = () => {
  return (
    <div className='section'>
        <div className={s.reason}>
            <h2>Почему <span className={s.highlight}>Telegram Mini Apps</span>  отлично подойдёт для бизнеса?</h2>
            <div className={s.cards}>
                <div className={s.card}>
                    <img src="/images/r1.jpg" alt="reason1"></img>
                    <div className={s.exp}>
                        <h3>Кроссплатформенность</h3>
                        <p>Доступны на всех устройствах без установки, внутри Telegram. Поддерживаются iOS, Android, Windows, macOS</p>
                    </div>
                    
                </div>
                <div className={s.card}>
                    <img src="/images/r2.jpg" alt="reason2"></img>
                    <div className={s.exp}>
                    <h3>Популярность</h3>
                    <p>Telegram даёт доступ к 800+ млн активных пользователей по всему миру.</p>
                    </div>
                </div>
                <div className={s.card}>
                    <img src="/images/r3.jpg" alt="reason3"></img>
                    <div className={s.exp}>
                    <h3>Гибкость</h3>
                    <p>Легко интегрируются с любыми сервисами, платёжными системами, CRM и аналитикой</p>
                    </div>
                </div>
                <div className={s.card}>
                    <img src="/images/r4.jpg" alt="reason4"></img>
                    <div className={s.exp}>
                    <h3>Быстрая разработка</h3>
                    <p>Без публикации в App Store и Google Play. Разработка приложения за 2–4 недели, экономия до 70% на запуске.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reason