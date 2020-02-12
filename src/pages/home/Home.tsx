import React, { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";

import SignIn from "../../components/SignIn";

export default () => {
  const [modalStatus, setModalStatus] = useState(false);

  // show/hide modal
  const toggleModal = () => setModalStatus(!modalStatus);

  return (
    <Container>
      <h1>Home page works!</h1>
      <Button variant="primary" onClick={toggleModal}>
        bootstrap
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
      <SignIn />
    </Container>
  );
};
