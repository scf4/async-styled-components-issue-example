import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { asyncComponent } from 'react-async-component';

const PageA = asyncComponent({
  resolve: () => import('src/pages/a'),
});
const PageB = asyncComponent({
  resolve: () => import('src/pages/b'),
});

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Link to="/ ">Page1</Link>
        <Link to="/b">Page2</Link>
        <Switch>
          <Route exact path="/" component={PageA} />
          <Route exact path="/b" component={PageB} />
        </Switch>
      </div>
    );
  }
}
