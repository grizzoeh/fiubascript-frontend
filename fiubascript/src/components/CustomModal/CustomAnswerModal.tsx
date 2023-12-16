import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import './CustomModal.css'

interface CustomAnswerModalProps {
  showModal: boolean;
  handleModalClose: () => void;
  correctAnswer: string;
  selectedAnswer?: string;
}

export const CustomAnswerModal = ({ showModal, handleModalClose, correctAnswer, selectedAnswer} : CustomAnswerModalProps) => {

  const [title, settitle] = useState('')
  const [body, setbody] = useState('')

  useEffect(() => {
    if(correctAnswer === ''){
      settitle('')
      setbody('')
    }
    else if(correctAnswer === 'error'){
      settitle('Error en la IA')
      setbody('Te contaremos esta respuesta como correcta :) Disculpa las molestias!')
    }
    else if (correctAnswer === selectedAnswer) {
      settitle('Correcto!')
      setbody(`Respuesta correcta: ${correctAnswer}`)
    } else if (selectedAnswer !== ''){
      settitle('Incorrecto!')
      setbody(`Respuesta correcta: ${correctAnswer}-Tu respuesta: ${selectedAnswer}`)
    }else {
      settitle('Tiempo agotado!')
      setbody(`Respuesta correcta: ${correctAnswer}`)
    }
  }, [correctAnswer, selectedAnswer])

  return (
    <Modal show={showModal} onHide={handleModalClose} animation={true} centered size='lg' backdrop={true}>
      <Modal.Header className={`text-white border-0 justify-content-center ${correctAnswer !== '' ? selectedAnswer===correctAnswer ? 'custom-modal-header-success' : 'custom-modal-header-error' : ''}`}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex flex-column align-items-center justify-content-center mt-3 mb-3'>
          {body.split('-').map((text) => {
            return <p>{text}</p>
          })}
        </div>
      </Modal.Body>
      {/* <div className='d-flex justify-content-center mg-2 mb-4'>
        <Button variant="primary" onClick={handleModalClose} className='mx-auto bg-primary-light' size='lg'>
          Volver a Home
        </Button>
      </div> */}
    </Modal>
  );
};
  