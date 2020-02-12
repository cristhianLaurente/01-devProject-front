import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { PageTransition } from '../../components/page-transition/PageTransition';

export default () => {
  const [modalStatus, setModalStatus] = useState(false);
  const history = useHistory();

  // show/hide modal
  const toggleModal = () => setModalStatus(!modalStatus);

  return (
    <PageTransition>
      <h1>Home page works!</h1>
      <Button variant="primary" onClick={toggleModal}>
        bootstrap
      </Button>

      <Button variant="primary" onClick={() => history.push('/hola')}>
        not found
      </Button>

      <Modal show={modalStatus} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Bootstrap modal works!</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
          <Button variant="primary" onClick={toggleModal}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </PageTransition>
  );
};
