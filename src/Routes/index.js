// routes.jsx
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppComponent from '../AppComponent';
import WelcomePage from '../WelcomePage';
import TicketViewer from '../TicketViewer';
import SequenceGenerator from '../SequenceGenerator';

const Routes = () => (
  <AppComponent>
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/ticket" component={TicketViewer} />
      <Route path="/generate-sequence" component={SequenceGenerator} />
    </Switch>
  </AppComponent>
);

export default Routes;
