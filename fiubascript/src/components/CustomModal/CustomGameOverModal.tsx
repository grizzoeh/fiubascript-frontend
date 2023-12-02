import React from 'react'
import { Modal, Button } from 'react-bootstrap';

interface CustomGameOverModalProps {
  showModal: boolean;
  handleModalClose: () => void;
}

export const CustomGameOverModal = ({ showModal, handleModalClose} : CustomGameOverModalProps) => {
  return (
    <Modal show={showModal} onHide={handleModalClose} animation={true} centered size='lg' backdrop={false}>
      <Modal.Header className='bg-primary-light text-white border-0 justify-content-center'>
        <Modal.Title>Felicitaciones!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex justify-content-center mt-2 mb-5'>
          Has terminado el juego!
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
  