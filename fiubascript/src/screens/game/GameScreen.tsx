import React, { useEffect, useState } from 'react'
import { BackgroundContainer } from '../../components/BackgroundContainer/BackgroundContainer'
import { AnswerButton } from '../../components/AnswerButton/AnswerButton'
import { GameHeader } from '../../components/GameHeader/GameHeader'
import './GameScreen.css'
import { Question } from '../../components/Question/Question'
import { Powerups } from '../../components/Powerups/Powerups'
import { getQuestionsFromIA } from '../../services/openAiApi'
import { useNavigate } from 'react-router-dom'
import { Loader } from '../../components/Loader/Loader'
import Confetti from 'react-confetti'
import { CustomModal } from '../../components/CustomModal/CustomModal'
import { Avatar } from '../../components/Avatar/Avatar'
import useUser from '../../hooks/useUser'

type IAQuestions = {
  "pregunta": string,
  "respuestas": Array<string>,
  "correcta": string
}

export const GameScreen = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<IAQuestions[] | undefined>();
  const [questionIndex, setquestionIndex] = useState(0)
  const [selectedAnswer, setselectedAnswer] = useState('')
  const [correctAnswer, setcorrectAnswer] = useState('')
  const [incorrectAnswer, setincorrectAnswer] = useState('')
  const [gameOver, setgameOver] = useState(false)
  const {userInfo} = useUser()

  useEffect(() => {
    getQuestionsFromIA().then((aiQuestions: Array<IAQuestions>) => {
      console.log(aiQuestions);
      setQuestions(aiQuestions as unknown as IAQuestions[]);
    });
  }, []);

  const onFinishAnswerTime = () => {
    console.log('Answer time ends, show Results!')
    console.log('selectedAnswer', selectedAnswer)
    questions && console.log('correctAnwer', questions[questionIndex].correcta)

    if(questions){
      if(questions[questionIndex].respuestas[0] === questions[questionIndex].correcta){
        setcorrectAnswer('A')
        if(selectedAnswer !== 'A') setincorrectAnswer(prevAnswer => prevAnswer + selectedAnswer)
      }
      if(questions[questionIndex].respuestas[1] === questions[questionIndex].correcta){
        setcorrectAnswer('B')
        if(selectedAnswer !== 'B') setincorrectAnswer(prevAnswer => prevAnswer + selectedAnswer)
      }
      if(questions[questionIndex].respuestas[2] === questions[questionIndex].correcta){
        setcorrectAnswer('C')
        if(selectedAnswer !== 'C') setincorrectAnswer(prevAnswer => prevAnswer + selectedAnswer)
      }
      if(questions[questionIndex].respuestas[3] === questions[questionIndex].correcta){
        setcorrectAnswer('D')
        if(selectedAnswer !== 'D') setincorrectAnswer(prevAnswer => prevAnswer + selectedAnswer)
      }
    }
  }

  const onFinishShowResultTime = () => {
    console.log('timer ends from game')
    setselectedAnswer('')
    setcorrectAnswer('')
    setincorrectAnswer('')
    setquestionIndex(prevIndex => prevIndex < 10 ? prevIndex + 1 : prevIndex);
    // if(questionIndex === 0) {
    //   setgameOver(true)
    // }
    if(questionIndex === 9) {
      setgameOver(true)
    }
  }

  const handleModalClose = () => {
    navigate('/home')
  }

  const onAddTime = () => {

  }
  const onDeleteOptions = () => {
    let incorrectCount = 0
    if(questions){
      if(questions[questionIndex].respuestas[0] !== questions[questionIndex].correcta && incorrectCount < 2){
        incorrectCount ++
        setincorrectAnswer(prevAnswer => prevAnswer + 'A')
      }
      if(questions[questionIndex].respuestas[1] !== questions[questionIndex].correcta && incorrectCount < 2){
        incorrectCount ++
        setincorrectAnswer(prevAnswer => prevAnswer + 'B')
      }
      if(questions[questionIndex].respuestas[2] !== questions[questionIndex].correcta && incorrectCount < 2){
        incorrectCount ++
        setincorrectAnswer(prevAnswer => prevAnswer + 'C')
      }
      if(questions[questionIndex].respuestas[3] !== questions[questionIndex].correcta && incorrectCount < 2){
        incorrectCount ++
        setincorrectAnswer(prevAnswer => prevAnswer + 'D')
      }
    }
  }
  const onChangeQuestion = () => {
    
  }

  return (
    <BackgroundContainer>
      {questions ? <>
        <GameHeader 
          questionNumber={questionIndex + 1}
          coins={userInfo.coins || 0}
          onFinishAnswerTime={onFinishAnswerTime}
          onFinishShowResultTime={onFinishShowResultTime}
        />
        <div className='gameScreen-container'>
          <div className='gameScreen-question-container'>
            <div className='gameScreen-question-background'>
              <Question
                question={questions[questionIndex].pregunta}
                answerA={questions[questionIndex].respuestas[0]}
                answerB={questions[questionIndex].respuestas[1]}
                answerC={questions[questionIndex].respuestas[2]}
                answerD={questions[questionIndex].respuestas[3]}
              />
            </div>
          </div>
          <div className='gameScreen-powerups-container'>
            <Powerups 
              onAddTime={onAddTime}
              onDeleteOptions={onDeleteOptions}
              onChangeQuestion={onChangeQuestion}
            />
          </div>
          <div className='gameScreen-buttons-container'>
            <div className='gameScreen-buttons-row'>
              <AnswerButton 
                answer="A"
                selectedAnswer={selectedAnswer === 'A'}
                setSelectedAnswer={() => setselectedAnswer('A')}
                isCorrect={correctAnswer === 'A'}
                isIncorrect={incorrectAnswer.includes('A')}
              />
              <AnswerButton
                answer="B"
                selectedAnswer={selectedAnswer === 'B'}
                setSelectedAnswer={() => setselectedAnswer('B')}
                isCorrect={correctAnswer === 'B'}
                isIncorrect={incorrectAnswer.includes('B')}
              />
            </div>
            <div className='gameScreen-buttons-row'>
              <AnswerButton
                answer="C"
                selectedAnswer={selectedAnswer === 'C'}
                setSelectedAnswer={() => setselectedAnswer('C')}
                isCorrect={correctAnswer === 'C'}
                isIncorrect={incorrectAnswer.includes('C')}
              />
              <AnswerButton
                answer="D"
                selectedAnswer={selectedAnswer === 'D'}
                setSelectedAnswer={() => setselectedAnswer('D')}
                isCorrect={correctAnswer === 'D'}
                isIncorrect={incorrectAnswer.includes('D')}
              />
            </div>
          </div>
        </div>
        <Avatar currentAvatarIndex={6}/>
        {/* <Avatar currentAvatarIndex={userInfo.currentCharacter || 0}/> */}
        <CustomModal showModal={gameOver} handleModalClose={handleModalClose}/>
        {gameOver &&
          <Confetti
            gravity={0.05}
          />
        }
        
      </>
      : <Loader/>}
    </BackgroundContainer>
  )
}
