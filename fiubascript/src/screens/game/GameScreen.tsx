import React from 'react'
import { BackgroundContainer } from '../../components/BackgroundContainer/BackgroundContainer'
import { AnswerButton } from '../../components/AnswerButton/AnswerButton'

export const GameScreen = () => {
  return (
    <BackgroundContainer>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <AnswerButton answer="A" />
        <AnswerButton answer="B" />
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <AnswerButton answer="C" />
        <AnswerButton answer="D" />
      </div>
    </BackgroundContainer>
  )
}
