import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//MUI Components
import Tabs, { Tab } from 'material-ui/Tabs';
import { withStyles } from 'material-ui/styles';
//HOC for global state
import GlobalsConnect from '../../HOC/GlobalsConnect/GlobalsConnect';
//locale
import { lenguajeSelector } from '../../Store/Actions/globals';
import { Home, Services, Projects, Contact } from '../../Assets/diccionary';
//Internal components
import HomeIcon from '../../images/SVG/Home';
import CodeIcon from '../../images/SVG/Code';
import ProjectsIcon from '../../images/SVG/Projects';
import ContactIcon from '../../images/SVG/Contact';
//CSS in JS Styles
const styles = theme => ({
  root: {}
});

/**
 * A component that renders a tab menu with icons
 */
export class TabMenu extends Component {
  handleChange = (event, value) => {
    this.props.setTabValue(value);
  };

  render() {
    const { lenguaje, tabValue } = this.props.globals;
    const { classes } = this.props;

    return (
      <div className={`header__bottonNavigation ${classes.root}`}>
        <Tabs
          value={tabValue}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          className="header__bottonNavigation__tabs"
          centered
        >
          <Tab
            label={lenguajeSelector(lenguaje, Home)}
            icon={<HomeIcon />}
            component={Link}
            to={'/'}
          />
          <Tab
            label={lenguajeSelector(lenguaje, Services)}
            icon={<CodeIcon />}
            component={Link}
            to={'/services'}
          />
          <Tab
            label={lenguajeSelector(lenguaje, Projects)}
            icon={<ProjectsIcon />}
            component={Link}
            to={'/projects'}
          />
          <Tab
            label={lenguajeSelector(lenguaje, Contact)}
            icon={<ContactIcon />}
            component={Link}
            to={'/contact'}
          />
        </Tabs>
      </div>
    );
  }
}

TabMenu.propTypes = {
  globals: PropTypes.shape({
    tabValue: PropTypes.number.isRequired,
    lenguaje: PropTypes.string.isRequired
  })
};

TabMenu = withStyles(styles)(TabMenu);

export default GlobalsConnect(TabMenu);
