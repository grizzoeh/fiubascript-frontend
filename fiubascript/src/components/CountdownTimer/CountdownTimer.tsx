import React, { useEffect, useState } from 'react'
import './CountdownTimer.css'
import { ANSWER_TIME, SHOW_RESULT_TIME } from '../../constants/constants'

type CountdownTimerProps = {
  onFinishAnswerTime: () => void
  onFinishShowResultTime: () => void
  addTime: number
}

export const CountdownTimer = ({ onFinishAnswerTime, onFinishShowResultTime, addTime }: CountdownTimerProps) => {

  const [timer, settimer] = useState(ANSWER_TIME)
  const [timeAdded, settimeAdded] = useState(false)

  useEffect(() => {
    if(addTime > 0 && !timeAdded){
      console.log('Add time in timer')
      settimer(prevTimer => prevTimer + addTime)
      settimeAdded(true)
    }else{
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
    }
  }, [timer])

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
