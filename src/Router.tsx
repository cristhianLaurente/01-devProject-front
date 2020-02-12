import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/home/Home'));

export default () => {
  return (
    <Router>
      <React.Suspense fallback={<h1>show loader here...</h1>}>
        {/* home page */}
        <Route exact path="/" component={Home}></Route>
      </React.Suspense>
    </Router>
  );
};
