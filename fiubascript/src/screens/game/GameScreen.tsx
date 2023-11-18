import React from 'react'
import { BackgroundContainer } from '../../components/BackgroundContainer/BackgroundContainer'
import { AnswerButton } from '../../components/AnswerButton/AnswerButton'
import { GameHeader } from '../../components/GameHeader/GameHeader'
import './GameScreen.css'
import { Question } from '../../components/Question/Question'

export const GameScreen = () => {
  return (
    <BackgroundContainer>
      <GameHeader questionNumber={1} coins={2550}/>
      <div className='gameScreen-container'>
        <div className='gameScreen-question-container'>
          <div className='gameScreen-question-background'>
            <Question/>
          </div>
        </div>
        <div className='gameScreen-powerups-container'>
          PowerUps
        </div>
        <div className='gameScreen-buttons-container'>
          <div className='gameScreen-buttons-row'>
            <AnswerButton answer="A" />
            <AnswerButton answer="B" />
          </div>
          <div className='gameScreen-buttons-row'>
            <AnswerButton answer="C" />
            <AnswerButton answer="D" />
          </div>
        </div>
      </div>
    </BackgroundContainer>
  )
}
