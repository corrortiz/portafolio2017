import React, { Component } from 'react';
//Internal Components
import ImageCardProject from '../ImageCardProject/ImageCardProject';
//Assests
import { Projects } from '../../Assets/projects';
/**
 * A list of Image Cards in a grid sistem
 */
class ListOfProjects extends Component {
  renderFunc = () => {
    // eslint-disable-next-line
    let item = null;

    return (item = Projects.map((obj, index) => (
      <ImageCardProject {...obj} hey={index} />
    )));
  };

  render() {
    return <div className="ListOfProjects box">{this.renderFunc()}</div>;
  }
}

export default ListOfProjects;
