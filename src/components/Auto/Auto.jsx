import React from 'react'
import s from './Auto.module.css'

const Auto = () => {
  return (
    <div className='section'>
        <div className={s.auto}>
            <h2>Автоматизируйте работу с клиентами</h2>
            <p>Внедрите Telegram Mini App в свои бизнес-процессы — упростите процессы заказов, поддержки и платежей через удобный интерфейс в Telegram</p>
            <button className={s.button}>Обсудить проект</button>
            <div className={s.img}>
                <img src="/images/auto1.jpg" alt="auto"></img>
                <img src="/images/auto2.jpg" alt="auto"></img>
            </div>
        </div>
    </div>
  )
}

export default Auto