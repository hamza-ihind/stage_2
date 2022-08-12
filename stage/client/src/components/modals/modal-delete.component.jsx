import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalDelete = ({ text, deleteVar, value }) => {

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const mixed = () => {
    setShow(false);
    deleteVar(value);
  }

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>T'es sur ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Est ce que vous etes sur de supprimer {text}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Button variant="danger" onClick={mixed} >
            Supprimer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDelete;