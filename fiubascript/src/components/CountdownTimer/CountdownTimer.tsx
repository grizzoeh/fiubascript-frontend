import React, { useEffect, useState } from 'react'
import './CountdownTimer.css'

type CountdownTimerProps = {
  onFinish: () => void
}

export const CountdownTimer = ({ onFinish }: CountdownTimerProps) => {

  const [timer, settimer] = useState(20)

  useEffect(() => {
    const interval = setInterval(() => {
      settimer(prevTimer => prevTimer > 0 ? prevTimer - 1 : prevTimer)
      if(timer === 0){
        onFinish()
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [])
  

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
