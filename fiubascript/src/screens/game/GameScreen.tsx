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
import { CustomGameOverModal } from '../../components/CustomModal/CustomGameOverModal'
import { Avatar } from '../../components/Avatar/Avatar'
import useUser from '../../hooks/useUser'
import { ADD_TIME_POWERUP } from '../../constants/constants'
import { CustomAnswerModal } from '../../components/CustomModal/CustomAnswerModal'
import { CustomLeaveModal } from '../../components/CustomModal/CustomLeaveModal'
import { CORRECT_ANSWER_PRICE, POWERUP_PRICES } from '../../constants/prices'
import { addCoins, reduceCoins } from '../../services/coinService'

type IAQuestions = {
  "pregunta": string,
  "respuestas": Array<string>,
  "correcta": string
}

export const GameScreen = () => {
  const navigate = useNavigate();
  const {userInfo, setUserInfo} = useUser()
  const [questions, setQuestions] = useState<IAQuestions[] | undefined>();
  const [questionIndex, setquestionIndex] = useState(0)
  const [selectedAnswer, setselectedAnswer] = useState('')
  const [correctAnswer, setcorrectAnswer] = useState('')
  const [incorrectAnswer, setincorrectAnswer] = useState('')
  const [discardedAnswer, setdiscardedAnswer] = useState('')
  const [powerupUsed, setpowerupUsed] = useState(false)
  const [addTime, setaddTime] = useState(0)
  const [questionOver, setquestionOver] = useState(false)
  const [gameOver, setgameOver] = useState(false)
  const [leaveModal, setleaveModal] = useState(false)
  const [correctAnswersCounter, setcorrectAnswersCounter] = useState(0)

  useEffect(() => {
    getQuestionsFromIA().then((aiQuestions: Array<IAQuestions>) => {
      setQuestions(aiQuestions as unknown as IAQuestions[]);
    });
  }, []);

  const onFinishAnswerTime = () => {
    if(questions){
      if(questions[questionIndex].respuestas[0] === questions[questionIndex].correcta){
        setcorrectAnswer('A')
        if(selectedAnswer === 'A'){
          setcorrectAnswersCounter(prevState => prevState + 1)
        }else{
          setincorrectAnswer(selectedAnswer)
        } 
      }
      else if(questions[questionIndex].respuestas[1] === questions[questionIndex].correcta){
        setcorrectAnswer('B')
        if(selectedAnswer === 'B'){
          setcorrectAnswersCounter(prevState => prevState + 1)
        }else{
          setincorrectAnswer(selectedAnswer)
        } 
      }
      else if(questions[questionIndex].respuestas[2] === questions[questionIndex].correcta){
        setcorrectAnswer('C')
        if(selectedAnswer === 'C'){
          setcorrectAnswersCounter(prevState => prevState + 1)
        }else{
          setincorrectAnswer(selectedAnswer)
        } 
      }
      else if(questions[questionIndex].respuestas[3] === questions[questionIndex].correcta){
        setcorrectAnswer('D')
        if(selectedAnswer === 'D'){
          setcorrectAnswersCounter(prevState => prevState + 1)
        }else{
          setincorrectAnswer(selectedAnswer)
        } 
      }
      else{
        setcorrectAnswer('error')
        console.log('AI Error: correct answer not found')
        setcorrectAnswersCounter(prevState => prevState + 1)
      }
    }
    setquestionOver(true)
  }
  
  const cleanGameScreen = () => {
    setquestionOver(false)
    setselectedAnswer('')
    setcorrectAnswer('')
    setincorrectAnswer('')
    setdiscardedAnswer('')
    setpowerupUsed(false)
    setaddTime(0)
  }

  const onFinishShowResultTime = () => {
    cleanGameScreen()
    setquestionIndex(prevIndex => prevIndex < 9 ? prevIndex + 1 : prevIndex);
    
    if(questionIndex === 9) {
      userInfo.id && addCoins(userInfo.id, CORRECT_ANSWER_PRICE * correctAnswersCounter).then(updatedCoins => {
        updatedCoins != null && setUserInfo({
          ...userInfo,
          coins: updatedCoins
        })
      });
      setgameOver(true);
    }
  }

  const onAddTime = () => {
    userInfo.id && reduceCoins(userInfo.id, POWERUP_PRICES.addTime).then(updatedCoins => {
      updatedCoins != null && setUserInfo({
        ...userInfo,
        coins: updatedCoins
      })
    });
    setpowerupUsed(true)
    setaddTime(ADD_TIME_POWERUP)
  }

  const onDeleteOptions = () => {
    userInfo.id && reduceCoins(userInfo.id, POWERUP_PRICES.deleteOptions).then(updatedCoins => {
      updatedCoins != null && setUserInfo({
        ...userInfo,
        coins: updatedCoins
      })
    });
    setpowerupUsed(true)
    let discardedCount = 0
    if(questions){
      if(questions[questionIndex].respuestas[2] !== questions[questionIndex].correcta && discardedCount < 2){
        discardedCount ++
        setdiscardedAnswer(prevState => prevState + 'C')
      }
      if(questions[questionIndex].respuestas[0] !== questions[questionIndex].correcta && discardedCount < 2){
        discardedCount ++
        setdiscardedAnswer(prevState => prevState + 'A')
      }
      if(questions[questionIndex].respuestas[3] !== questions[questionIndex].correcta && discardedCount < 2){
        discardedCount ++
        setdiscardedAnswer(prevState => prevState + 'D')
      }
      if(questions[questionIndex].respuestas[1] !== questions[questionIndex].correcta && discardedCount < 2){
        discardedCount ++
        setdiscardedAnswer(prevState => prevState + 'B')
      }
    }
  }

  const onChangeQuestion = () => {
    userInfo.id && reduceCoins(userInfo.id, POWERUP_PRICES.changeQuestion).then(updatedCoins => {
      updatedCoins != null && setUserInfo({
        ...userInfo,
        coins: updatedCoins
      })
    });
    cleanGameScreen()
    setpowerupUsed(true)
    console.log('Index: ', questionIndex)
    console.log('Length: ', questions && questions.length)
    console.log('Count: ', questions && ((9 - questionIndex) < ((questions.length - 1) - questionIndex)))

    if(questions && ((9 - questionIndex) < ((questions.length - 1) - questionIndex))){
      const questionsAux = questions
      questionsAux.splice(questionIndex, 1)
      setQuestions([...questionsAux])
    }else{
      alert('No hay más preguntas para cambiar en esta version de prueba!')
    }
  }

  const handleAnswerSelection = (answer: string) => {
    setselectedAnswer(answer)
  }

  const handleLeave = () => {
    navigate('/home')
  }

  const handleGameOverModalClose = () => {
    navigate('/home')
  }
  
  const handleLeaveModalOpen = () => {
    setleaveModal(true)
  }

  const handleLeaveModalClose = () => {
    setleaveModal(false)
  }

  return (
    <BackgroundContainer>
      {questions ? <>
        <GameHeader 
          questionNumber={questionIndex + 1}
          coins={userInfo.coins || 0}
          onFinishAnswerTime={onFinishAnswerTime}
          onFinishShowResultTime={onFinishShowResultTime}
          addTime={addTime}
          selectedAnswer={selectedAnswer}
          gameOver={gameOver}
          onLeave={handleLeaveModalOpen}
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
              powerupUsed={powerupUsed}
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
                setSelectedAnswer={() => handleAnswerSelection('A')}
                isCorrect={correctAnswer === 'A'}
                isIncorrect={incorrectAnswer === 'A'}
                isDiscarded={discardedAnswer.includes('A')}
              />
              <AnswerButton
                answer="B"
                selectedAnswer={selectedAnswer === 'B'}
                setSelectedAnswer={() => handleAnswerSelection('B')}
                isCorrect={correctAnswer === 'B'}
                isIncorrect={incorrectAnswer === 'B'}
                isDiscarded={discardedAnswer.includes('B')}
              />
            </div>
            <div className='gameScreen-buttons-row'>
              <AnswerButton
                answer="C"
                selectedAnswer={selectedAnswer === 'C'}
                setSelectedAnswer={() => handleAnswerSelection('C')}
                isCorrect={correctAnswer === 'C'}
                isIncorrect={incorrectAnswer === 'C'}
                isDiscarded={discardedAnswer.includes('C')}
              />
              <AnswerButton
                answer="D"
                selectedAnswer={selectedAnswer === 'D'}
                setSelectedAnswer={() => handleAnswerSelection('D')}
                isCorrect={correctAnswer === 'D'}
                isIncorrect={incorrectAnswer === 'D'}
                isDiscarded={discardedAnswer.includes('D')}
              />
            </div>
          </div>
        </div>
        <Avatar currentAvatarIndex={userInfo.currentCharacter || 0}/>
        <CustomGameOverModal showModal={gameOver} handleModalClose={handleGameOverModalClose} correctAnswers={correctAnswersCounter}/>
        <CustomLeaveModal showModal={leaveModal} handleModalClose={handleLeaveModalClose} handleLeave={handleLeave}/>
        <CustomAnswerModal correctAnswer={correctAnswer} selectedAnswer={selectedAnswer} showModal={questionOver} handleModalClose={() => {}}/>
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
