// @flow
import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Contact from './ContactRout/ContactRout';
import Home from './HomeRoute/HomeRoute';
import Projects from './ProjectsRoute/ProjectsRoute';
import Services from './ServicesRoute/ServicesRoute';

const Routs = withRouter(({ location }) => (
  <div>
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="animate" timeout={350}>
        <Switch className="Routs" location={location}>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </div>
));
export default Routs;
