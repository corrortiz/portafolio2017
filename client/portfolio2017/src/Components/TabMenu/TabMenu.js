// @flow
import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Tabs, { Tab } from 'material-ui/Tabs';

import FavoriteIcon from 'material-ui-icons/Favorite';
import PersonPinIcon from 'material-ui-icons/PersonPin';
import HelpIcon from 'material-ui-icons/Help';
import ThumbUp from 'material-ui-icons/ThumbUp';

import GlobalsConnect from '../../HOC/GlobalsConnect/GlobalsConnect';

import { lenguajeSelector } from '../../Store/Actions/globals';
import { Home, Services, Projects, Contact } from '../../Assets/diccionary';

class TabMenu extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState(() => ({ value }));
  };

  render() {
    const { value } = this.state;
    const { lenguaje } = this.props.globals;

    return (
      <div className="header__bottonNavigation">
        <Tabs
          value={value}
          onChange={this.handleChange}
          scrollable
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          className="header__bottonNavigation__tabs"
          centered
        >
          <Tab
            label={lenguajeSelector(lenguaje, Home)}
            icon={<FavoriteIcon />}
            component={Link}
            to={'/'}
          />
          <Tab
            label={lenguajeSelector(lenguaje, Services)}
            icon={<PersonPinIcon />}
            component={Link}
            to={'/services'}
          />
          <Tab
            label={lenguajeSelector(lenguaje, Projects)}
            icon={<HelpIcon />}
            component={Link}
            to={'/projects'}
          />
          <Tab
            label={lenguajeSelector(lenguaje, Contact)}
            icon={<ThumbUp />}
            component={Link}
            to={'/contact'}
          />
        </Tabs>
      </div>
    );
  }
}

export default GlobalsConnect(TabMenu);
