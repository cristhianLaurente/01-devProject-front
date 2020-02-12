import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/home/Home'));
const NotFound = React.lazy(() => import('./pages/404'));

export default () => {
  return (
    <Router>
      <React.Suspense fallback={<h1>show loader here...</h1>}>
        <Switch>
          {/* home page */}
          <Route exact path="/" component={Home}></Route>
          {/* not found page */}
          <Route component={NotFound}></Route>
        </Switch>
      </React.Suspense>
    </Router>
  );
};
