import React from 'react'
import s from './Greet.module.css'

const Greet = () => {
  return (
    <div className='section' id="home">
      <div className={s.greet}>
        <h1>
          Разработка и продвижение <span className={s.highlight}>Telegram Mini Apps</span> под ключ
        </h1>
        <p className={s.text}>Создаём современные IT решения с упором на качество, которые приносят прибыль</p>
        <button className={s.button}>Обсудить проект</button>
      </div>
    </div>
  )
}

export default Greet
