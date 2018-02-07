// @flow
import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
//Animate Routs
import { TransitionGroup, CSSTransition } from 'react-transition-group';
//Internal Routs
import Contact from './ContactRout/ContactRout';
import Home from './HomeRoute/HomeRoute';
import Projects from './ProjectsRoute/ProjectsRoute';
import Services from './ServicesRoute/ServicesRoute';

/**
 * Basic component for react-router where the routes and their components are declared
 * also the change animation is added by means of react-transition-group
 */
const Routs = withRouter(({ location }) => (
  <div>
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={450}>
        <Switch className="Routs" location={location}>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/projects" component={Projects} />
          <Route exact={true} path="/contact" component={Contact} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </div>
));

export default Routs;
