import React from 'react'
import { BackgroundContainer } from '../../components/BackgroundContainer/BackgroundContainer'
import { AnswerButton } from '../../components/AnswerButton/AnswerButton'
import { GameHeader } from '../../components/GameHeader/GameHeader'
import './GameScreen.css'
import { Question } from '../../components/Question/Question'
import { Powerups } from '../../components/Powerups/Powerups'

export const GameScreen = () => {
  return (
    <BackgroundContainer>
      <GameHeader questionNumber={1} coins={2550}/>
      <div className='gameScreen-container'>
        <div className='gameScreen-question-container'>
          <div className='gameScreen-question-background'>
            <Question
              question={'¿Cuál de las siguientes razas es propia de los perros?'}
              answerA={'Siamés'}
              answerB={'Falabella'}
              answerC={'Collie'}
              answerD={'Braford'}
            />
          </div>
        </div>
        <div className='gameScreen-powerups-container'>
          <Powerups/>
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
