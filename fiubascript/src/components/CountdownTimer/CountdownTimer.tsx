import React, { useEffect, useState } from 'react'
import './CountdownTimer.css'
import { ANSWER_TIME, SHOW_RESULT_TIME } from '../../constants/constants'

type CountdownTimerProps = {
  onFinishAnswerTime: () => void
  onFinishShowResultTime: () => void
}

export const CountdownTimer = ({ onFinishAnswerTime, onFinishShowResultTime }: CountdownTimerProps) => {

  const [timer, settimer] = useState(ANSWER_TIME)

  useEffect(() => {
    setTimeout(() => {
      settimer(prevTimer => prevTimer > 0 ? prevTimer - 1 : prevTimer)
      if(timer === 0){
        onFinishAnswerTime()
        setTimeout(() => {
          onFinishShowResultTime()
          settimer(ANSWER_TIME)
        }, SHOW_RESULT_TIME*1000);
      }
    }, 1000);
  }, [timer])
  

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
          className={timer >= 5 ? 'countdownTimer-primary' : 'countdownTimer-secondary'}
          strokeWidth="5"
          strokeDasharray={190}
          strokeDashoffset={190-((timer/20)*190)}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        />
      </svg>
      <span className={'countdownTimer-time' + (timer >= 5 ? ' countdownTimer-primary' : ' countdownTimer-secondary')}>{timer}</span>
    </div>
  )
}
