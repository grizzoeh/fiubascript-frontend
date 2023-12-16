import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import { CORRECT_ANSWER_PRICE } from '../../constants/prices';
import coin from '../../assets/coin.png';
import './CustomModal.css';

interface CustomGameOverModalProps {
  showModal: boolean;
  handleModalClose: () => void;
  correctAnswers: number;
}

export const CustomGameOverModal = ({ showModal, handleModalClose, correctAnswers} : CustomGameOverModalProps) => {
  return (
    <Modal show={showModal} onHide={handleModalClose} animation={true} centered size='lg' backdrop={false}>
      <Modal.Header className='bg-primary-light text-white border-0 justify-content-center'>
        <Modal.Title>¡Felicitaciones!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex justify-content-center mt-2 mb-2'>
          ¡Has terminado el juego, contestando {correctAnswers} preguntas correctamente!
        </div>
        <div className='custom-modal-coin-container'>
          +
          <img className='custom-modal-coin' src={coin} alt={'title'} />
          {correctAnswers * CORRECT_ANSWER_PRICE}
        </div>
      </Modal.Body>
      <div className='d-flex justify-content-center mg-2 mb-4'>
        <Button variant="primary" onClick={handleModalClose} className='mx-auto bg-primary-light' size='lg'>
          Volver al inicio
        </Button>
      </div>
    </Modal>
  );
};
  