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
    return services.map(obj => (
      <ImageCard key={obj.smallDescription} {...obj} />
    ));
  };

  render() {
    return <div className="ListOfImageCard box">{this.renderFunc()}</div>;
  }
}

export default ListOfImageCard;
