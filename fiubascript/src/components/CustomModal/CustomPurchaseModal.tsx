import React from 'react';
import { Modal } from 'react-bootstrap';

type CustomPurchaseModalProps = {
  onClose: () => void;
};



export const CustomPurchaseModal: React.FC<CustomPurchaseModalProps> = ({ onClose }) => {
  return (
    <Modal  animation={true} centered size='lg' backdrop={true}>
      <Modal.Header className="custom-modal-header-error">
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex flex-column align-items-center justify-content-center mt-3 mb-3'>
           <p>No tiene suficientes monedas para realizar esta compra</p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

