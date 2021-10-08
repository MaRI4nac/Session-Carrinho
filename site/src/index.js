import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './components/home'
import Details from './components/details'

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/details" component={Details} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
