import React, { useEffect, useState } from 'react'
import './CountdownTimer.css'
import { ANSWER_TIME, SHOW_RESULT_TIME } from '../../constants/constants'

type CountdownTimerProps = {
  onFinishAnswerTime: () => void
  onFinishShowResultTime: () => void
  addTime: number
  selectedAnswer: string
  gameOver: boolean
}

export const CountdownTimer = ({ onFinishAnswerTime, onFinishShowResultTime, addTime, selectedAnswer, gameOver }: CountdownTimerProps) => {

  const [timer, settimer] = useState(ANSWER_TIME)
  const [timeAdded, settimeAdded] = useState(false)

  useEffect(() => {
    if(gameOver){
      console.log('Se termino el juego')
      settimer(0)
      return
    }
    else if(selectedAnswer !== ''){
      console.log('Se selecciono una respuesta')
      timeEnded()
    }
    else if(addTime > 0 && !timeAdded){
      console.log('Se agrego tiempo')
      settimer(prevTimer => prevTimer + addTime)
      settimeAdded(true)
    }
    else{
      console.log('Continua el paso del tiempo')
      setTimeout(() => {
        settimer(prevTimer => prevTimer > 0 ? prevTimer - 1 : prevTimer)
        if(timer === 0){
          console.log('Se termino el tiempo')
          timeEnded()
        }
      }, 1000);
    }
  }, [timer, gameOver])

  const timeEnded = () => {
    console.log('Iniciando timer de mostrar resultado')
    onFinishAnswerTime()
    setTimeout(() => {
      console.log('Finalizando timer de mostrar resultado')
      onFinishShowResultTime()
      settimer(ANSWER_TIME)
    }, SHOW_RESULT_TIME*1000);
  }

  // useEffect(() => {
  //   console.log('addTime')
  //   if(addTime > 0){
  //     settimer(prevTimer => prevTimer + addTime)
  //     settimeAdded(true)
  //   }else{
  //     settimeAdded(false)
  //   }
  // }, [addTime])

  return (
    <div className="countdownTimer-container">
      <svg className="countdownTimer-image">
        <circle
          className="countdownTimer-circle-background"
          strokeWidth="5"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        />
        <circle
          className={timer > 5 ? 'countdownTimer-primary' : 'countdownTimer-secondary'}
          strokeWidth="5"
          strokeDasharray={190}
          strokeDashoffset={190-((timer/ANSWER_TIME)*190)}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        />
      </svg>
      <span className={'countdownTimer-time' + (timer > 5 ? ' countdownTimer-primary' : ' countdownTimer-secondary')}>{timer}</span>
    </div>
  )
}
