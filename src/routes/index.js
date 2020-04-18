import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import page404 from '../pages/page404';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={page404} />
    </Switch>
  );
}
