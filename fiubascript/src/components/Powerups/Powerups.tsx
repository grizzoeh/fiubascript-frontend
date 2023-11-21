import React from 'react'
import './Powerups.css'
import AddTime from '../../assets/AddTime.png'
import Bomb from '../../assets/Bomb.png'
import Reload from '../../assets/Reload.png'
import coin from '../../assets/coin.png'

export const Powerups = () => {
  return (
    <div className='powerups-container'>
      <button className='powerup-button'>
        <img src={AddTime} alt='Add' className='powerup-button-icon'/>
        <div>
          <div className='powerup-button-text'>+15 segundos</div>
          <div className='powerup-button-side-container'>
            <img className='powerup-button-price-icon' src={coin} alt={'title'} />
            <div className='powerup-button-price-text'>200</div>
          </div>
        </div>
      </button>
      <button className='powerup-button'>
        <img src={Bomb} alt='Add' className='powerup-button-icon'/>
        <div>
          <div className='powerup-button-text'>Eliminar 2 opciones</div>
          <div className='powerup-button-side-container'>
            <img className='powerup-button-price-icon' src={coin} alt={'title'} />
            <div className='powerup-button-price-text'>600</div>
          </div>
        </div>
      </button>
      <button className='powerup-button'>
        <img src={Reload} alt='Add' className='powerup-button-icon powerup-icon-padded'/>
        <div>
          <div className='powerup-button-text'>Cambiar pregunta</div>
          <div className='powerup-button-side-container'>
            <img className='powerup-button-price-icon' src={coin} alt={'title'} />
            <div className='powerup-button-price-text'>300</div>
          </div>
        </div>
      </button>
    </div>
  )
}
