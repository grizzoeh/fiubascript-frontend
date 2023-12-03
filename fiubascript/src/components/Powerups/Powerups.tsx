import React, { useEffect, useState } from 'react'
import './Powerups.css'
import AddTime from '../../assets/AddTime.png'
import Bomb from '../../assets/Bomb.png'
import Reload from '../../assets/Reload.png'
import AddTimeDisabled from '../../assets/AddTimeDisabled.png'
import BombDisabled from '../../assets/BombDisabled.png'
import ReloadDisabled from '../../assets/ReloadDisabled.png'
import coin from '../../assets/coin.png'
import coinDisabled from '../../assets/coinDisabled.png'
import { POWERUP_PRICES } from '../../constants/prices'
import useUser from '../../hooks/useUser'

type PowerupsProps = {
  onAddTime: () => void,
  onDeleteOptions: () => void,
  onChangeQuestion: () => void,
  powerupUsed: boolean
}

export const Powerups = ({onAddTime, onDeleteOptions, onChangeQuestion, powerupUsed} : PowerupsProps) => {

  const {userInfo} = useUser()
  const [timeDisabled, settimeDisabled] = useState(false)
  const [deleteDisabled, setdeleteDisabled] = useState(false)
  const [changeDisabled, setchangeDisabled] = useState(false)

  useEffect(() => {
    if(powerupUsed){
      settimeDisabled(true)
      setdeleteDisabled(true)
      setchangeDisabled(true)
    }else{
      if(userInfo?.coins){
        if(userInfo.coins < POWERUP_PRICES.addTime){
          settimeDisabled(true)
        }else{
          settimeDisabled(false)
        }
        
        if(userInfo.coins < POWERUP_PRICES.deleteOptions){
          setdeleteDisabled(true)
        }else{
          setdeleteDisabled(false)
        }
        
        if(userInfo.coins < POWERUP_PRICES.changeQuestion){
          setchangeDisabled(true)
        }else{
          setchangeDisabled(false)
        }
      }else{
        settimeDisabled(true)
        setdeleteDisabled(true)
        setchangeDisabled(true)
      }
    }
  }, [userInfo, powerupUsed])
  

  return (
    <div className='powerups-container'>
      <button className='powerup-button' onClick={onAddTime} disabled={timeDisabled}>
        <img src={timeDisabled ? AddTimeDisabled : AddTime} alt='Add' className='powerup-button-icon'/>
        <div>
          <div className={timeDisabled ? 'powerup-button-text-disabled' : 'powerup-button-text'}>+10 segundos</div>
          <div className='powerup-button-side-container'>
            <img className='powerup-button-price-icon' src={timeDisabled ? coinDisabled : coin} alt={'title'} />
            <div className={timeDisabled ? 'powerup-button-price-text-disabled' : 'powerup-button-price-text'}>{POWERUP_PRICES.addTime}</div>
          </div>
        </div>
      </button>
      <button className='powerup-button' onClick={onDeleteOptions} disabled={deleteDisabled}>
        <img src={deleteDisabled ? BombDisabled : Bomb} alt='Add' className='powerup-button-icon'/>
        <div>
          <div className={deleteDisabled ? 'powerup-button-text-disabled' : 'powerup-button-text'}>Eliminar 2 opciones</div>
          <div className='powerup-button-side-container'>
            <img className='powerup-button-price-icon' src={deleteDisabled ? coinDisabled : coin} alt={'title'} />
            <div className={deleteDisabled ? 'powerup-button-price-text-disabled' : 'powerup-button-price-text'}>{POWERUP_PRICES.deleteOptions}</div>
          </div>
        </div>
      </button>
      <button className='powerup-button' onClick={onChangeQuestion} disabled={changeDisabled}>
        <img src={changeDisabled ? ReloadDisabled : Reload} alt='Add' className='powerup-button-icon powerup-icon-padded'/>
        <div>
          <div className={changeDisabled ? 'powerup-button-text-disabled' : 'powerup-button-text'}>Cambiar pregunta</div>
          <div className='powerup-button-side-container'>
            <img className='powerup-button-price-icon' src={changeDisabled ? coinDisabled : coin} alt={'title'} />
            <div className={changeDisabled ? 'powerup-button-price-text-disabled' : 'powerup-button-price-text'}>{POWERUP_PRICES.changeQuestion}</div>
          </div>
        </div>
      </button>
    </div>
  )
}
