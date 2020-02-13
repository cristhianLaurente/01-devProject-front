import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { AnimatePresence } from 'framer-motion';

const Home = React.lazy(() => import('./pages/home/Home'));
const NotFound = React.lazy(() => import('./pages/404'));

export default () => {
  return (
    <Router>
      <React.Suspense
        fallback={
          <Container>
            <h1>show loader here...</h1>
          </Container>
        }>
        <AnimatePresence>
          <Switch>
            {/* home page */}
            <Route exact path="/" component={Home}></Route>
            {/* not found page */}
            <Route component={NotFound}></Route>
          </Switch>
        </AnimatePresence>
      </React.Suspense>
    </Router>
  );
};
