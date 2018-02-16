import React from 'react';
//Internal Components
import ListOfImageCard from '../../ListOfImageCard/ListOfImageCard';
import FooterApp from '../../FooterApp/FooterApp';
//locale Assest
import { Services } from '../../../Assets/diccionary';
/**
 * layout of the service roout
 */
const ServicesRoute = () => {
  return (
    <div>
      <FooterApp title={Services} />
      <ListOfImageCard />
    </div>
  );
};

export default ServicesRoute;
