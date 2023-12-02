import React from 'react'
import './Powerups.css'
import AddTime from '../../assets/AddTime.png'
import Bomb from '../../assets/Bomb.png'
import Reload from '../../assets/Reload.png'
import AddTimeDisabled from '../../assets/AddTimeDisabled.png'
import BombDisabled from '../../assets/BombDisabled.png'
import ReloadDisabled from '../../assets/ReloadDisabled.png'
import coin from '../../assets/coin.png'
import coinDisabled from '../../assets/coinDisabled.png'

type PowerupsProps = {
  onAddTime: () => void,
  onDeleteOptions: () => void,
  onChangeQuestion: () => void,
  powerupUsed: boolean
}

export const Powerups = ({onAddTime, onDeleteOptions, onChangeQuestion, powerupUsed} : PowerupsProps) => {
  return (
    <div className='powerups-container'>
      <button className='powerup-button' onClick={onAddTime} disabled={powerupUsed}>
        <img src={powerupUsed ? AddTimeDisabled : AddTime} alt='Add' className='powerup-button-icon'/>
        <div>
          <div className={powerupUsed ? 'powerup-button-text-disabled' : 'powerup-button-text'}>+15 segundos</div>
          <div className='powerup-button-side-container'>
            <img className='powerup-button-price-icon' src={powerupUsed ? coinDisabled : coin} alt={'title'} />
            <div className={powerupUsed ? 'powerup-button-price-text-disabled' : 'powerup-button-price-text'}>200</div>
          </div>
        </div>
      </button>
      <button className='powerup-button' onClick={onDeleteOptions} disabled={powerupUsed}>
        <img src={powerupUsed ? BombDisabled : Bomb} alt='Add' className='powerup-button-icon'/>
        <div>
          <div className={powerupUsed ? 'powerup-button-text-disabled' : 'powerup-button-text'}>Eliminar 2 opciones</div>
          <div className='powerup-button-side-container'>
            <img className='powerup-button-price-icon' src={powerupUsed ? coinDisabled : coin} alt={'title'} />
            <div className={powerupUsed ? 'powerup-button-price-text-disabled' : 'powerup-button-price-text'}>600</div>
          </div>
        </div>
      </button>
      <button className='powerup-button' onClick={onChangeQuestion} disabled={powerupUsed}>
        <img src={powerupUsed ? ReloadDisabled : Reload} alt='Add' className='powerup-button-icon powerup-icon-padded'/>
        <div>
          <div className={powerupUsed ? 'powerup-button-text-disabled' : 'powerup-button-text'}>Cambiar pregunta</div>
          <div className='powerup-button-side-container'>
            <img className='powerup-button-price-icon' src={powerupUsed ? coinDisabled : coin} alt={'title'} />
            <div className={powerupUsed ? 'powerup-button-price-text-disabled' : 'powerup-button-price-text'}>300</div>
          </div>
        </div>
      </button>
    </div>
  )
}
