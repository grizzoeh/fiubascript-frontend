import React from 'react'
import './Question.css'

type QuestionProps = {
  question: string,
  answerA: string,
  answerB: string,
  answerC: string,
  answerD: string,
}

export const Question = ({question, answerA, answerB, answerC, answerD} : QuestionProps) => {
  return (
    <div>
      <div className={`question-text`}>{question}</div>
      <div>
        <div className='answer-container'>
          <div className={`option-text`}>{'A)'}</div>
          <div className={`answer-text`}>{answerA}</div>
        </div>
        <div className='answer-container'>
          <div className={`option-text`}>{'B)'}</div>
          <div className={`answer-text`}>{answerB}</div>
        </div>
        <div className='answer-container'>
          <div className={`option-text`}>{'C)'}</div>
          <div className={`answer-text`}>{answerC}</div>
        </div>
        <div className='answer-container'>
          <div className={`option-text`}>{'D)'}</div>
          <div className={`answer-text`}>{answerD}</div>
        </div>
      </div>
    </div>
  )
}
