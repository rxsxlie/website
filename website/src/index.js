import React from 'react';
import ReactDOM from 'react-dom'
import App from './pages/App';
import Me from './pages/Me';
import Animations from './pages/Animations';
import { colors, setColors } from './Colors';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/me">
          <Me />
        </Route>
        <Route exact path="/animations">
          <Animations />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

