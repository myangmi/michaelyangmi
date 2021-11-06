import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router className="router">
    <Switch>
      <Route path="/" component={App} />
      {/* <Route exact path="/" component={Splash} /> */}
    </Switch>
  </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
