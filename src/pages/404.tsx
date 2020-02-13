import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { PageTransition } from '../components/page-transition/PageTransition';

/** not found page */
export default () => {
  const history = useHistory();
  return (
    <PageTransition container>
      <h1>Not found :c</h1>
      <Button variant="outline-warning" onClick={() => history.push('/')}>
        Volver
      </Button>
    </PageTransition>
  );
};
