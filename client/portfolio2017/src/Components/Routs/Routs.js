// @flow
import React from 'react';
import { Route, withRouter } from 'react-router-dom';
//Animate Routs
import { spring, AnimatedSwitch } from 'react-router-transition';
//Internal Routs
import Contact from './ContactRout/ContactRout';
import Home from './HomeRoute/HomeRoute';
import Projects from './ProjectsRoute/ProjectsRoute';
import Services from './ServicesRoute/ServicesRoute';
import FourOFour from './404/404';

function glide(val) {
  return spring(val, {
    stiffness: 174,
    damping: 24
  });
}

const pageTransitions = {
  atEnter: {
    offset: 100
  },
  atLeave: {
    offset: glide(-100)
  },
  atActive: {
    offset: glide(0)
  }
};

const Screen = ({ children }) => <div className="screen">{children}</div>;

/**
 * Basic component for react-router where the routes and their components are declared
 * also the change animation is added by means of react-transition-group
 */
const Routs = withRouter(({ location }) => (
  <Screen>
    <div className="rule">
      <AnimatedSwitch
        {...pageTransitions}
        runOnMount={location.pathname === '/'}
        mapStyles={styles => ({
          transform: `translateX(${styles.offset}%)`
        })}
        className="switchRule"
        location={location}
      >
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="*" component={FourOFour} />
      </AnimatedSwitch>
    </div>
  </Screen>
));

export default Routs;
