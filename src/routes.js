import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Documentation from './pages/Documentation';
import BlankPage from './pages/BlankPage';
import CrudElements from './pages/CrudElements';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Documentation} />
      <Route path="/blank-page" exact component={BlankPage} />
      <Route path="/crud-elements" exact component={CrudElements} />
    </Switch>
  );
}