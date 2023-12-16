import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import './CustomModal.css'

interface CustomGameOverModalProps {
  showModal: boolean;
  handleModalClose: () => void;
  handleLeave: () => void;
}

export const CustomLeaveModal = ({ showModal, handleModalClose, handleLeave} : CustomGameOverModalProps) => {
  return (
    <Modal show={showModal} onHide={handleModalClose} animation={true} centered size='lg' backdrop={false}>
      <Modal.Header className='bg-primary-light text-white border-0 justify-content-center'>
        <Modal.Title>¡Atención!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex justify-content-center mt-2 mb-5'>
          ¿Estás seguro que deseas abandonar la partida? Se perderá el progreso actual.
        </div>
      </Modal.Body>
      <div className='d-flex justify-content-center mg-2 mb-4'>
        <Button variant="primary" onClick={handleLeave} className='mx-auto bg-primary-light' size='lg'>
          Continuar
        </Button>
        <Button variant="primary" onClick={handleModalClose} className='mx-auto custom-modal-button-error' size='lg'>
          Cancelar
        </Button>
      </div>
    </Modal>
  );
};
  