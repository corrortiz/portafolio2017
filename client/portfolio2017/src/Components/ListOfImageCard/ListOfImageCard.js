import React, { Component } from 'react';
//Internal Components
import ImageCard from '../ImageCard/ImageCard';
//Assests
import { services } from '../../Assets/services';
/**
 * A list of Image Cards in a grid sistem
 */
class ListOfImageCard extends Component {
  renderFunc = () => {
    // eslint-disable-next-line
    let item = null;

    return (item = services.map((obj, index) => (
      <ImageCard {...obj} hey={index} />
    )));
  };

  render() {
    return <div className="ListOfImageCard box">{this.renderFunc()}</div>;
  }
}

export default ListOfImageCard;
