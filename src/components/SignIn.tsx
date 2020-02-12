import React from "react";
import { Form, Button, Col } from "react-bootstrap";

export default () => {
  return (
    <React.Fragment>
      <h1 className="signIn__title">Welcome to Hop On</h1>

      <Form className="signIn__form">
        <Col xs={4}>
          <Form.Group controlId="signInEmail">
            <Form.Control
              className="signIn__form-input"
              size="lg"
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </Col>

        <Col xs={4}>
          <Form.Group controlId="signInPassword">
            <Form.Control
              className="signIn__form-input"
              size="lg"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button size="lg" variant="primary" type="submit" block>
            Sign In
          </Button>
        </Col>
      </Form>
    </React.Fragment>
  );
};
