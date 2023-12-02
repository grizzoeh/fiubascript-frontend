import React from 'react'
import './AnswerButton.css';

type AnswerButtonProps = {
  answer: string;
  setSelectedAnswer: () => void;
  selectedAnswer: boolean;
  isCorrect: boolean;
  isIncorrect: boolean;
  isDiscarded: boolean;
};

export const AnswerButton = ({ answer, setSelectedAnswer, selectedAnswer, isCorrect, isIncorrect, isDiscarded }: AnswerButtonProps) => {
  return (
    <button 
      className={`answer-button ${selectedAnswer ? 'answer-button-selected' : ''} ${isCorrect ? 'answer-button-correct' : ''} ${isIncorrect ? 'answer-button-incorrect' : ''} ${isDiscarded ? 'answer-button-discarded' : ''}`} 
      onClick={setSelectedAnswer}
      disabled={isDiscarded}
    >
      <div style={{
        color: 'white',
        fontSize: '1.5rem',
        fontWeight: 'bold',
      }}>
        {answer}
      </div>
    </button>
  );
};

