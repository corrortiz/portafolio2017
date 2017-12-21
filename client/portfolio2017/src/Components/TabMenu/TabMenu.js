// @flow
import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Tabs, { Tab } from 'material-ui/Tabs';

import FavoriteIcon from 'material-ui-icons/Favorite';
import PersonPinIcon from 'material-ui-icons/PersonPin';
import HelpIcon from 'material-ui-icons/Help';
import ThumbUp from 'material-ui-icons/ThumbUp';

class TabMenu extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <div className="header__bottonNavigation">
        <Tabs
          value={value}
          onChange={this.handleChange}
          scrollable
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Home" icon={<FavoriteIcon />} component={Link} to={'/'} />
          <Tab
            label="Services"
            icon={<PersonPinIcon />}
            component={Link}
            to={'/services'}
          />
          <Tab
            label="Projects"
            icon={<HelpIcon />}
            component={Link}
            to={'/projects'}
          />
          <Tab
            label="Contact"
            icon={<ThumbUp />}
            component={Link}
            to={'/contact'}
          />
        </Tabs>
      </div>
    );
  }
}

export default TabMenu;