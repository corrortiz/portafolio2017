import React from 'react';

import ImageContainer from '../../ImageContainer/ImageContainer';
import TwoColumPresentation from '../../TwoColumPresentation/TwoColumPresentation';
import TwoColumPresentationLeftToRight from '../../TwoColumPresentationLeftToRight/TwoColumPresentationLeftToRight';

const HomeRoute = () => {
  return (
    <div>
      <ImageContainer />
      <TwoColumPresentation />
      <TwoColumPresentationLeftToRight />
    </div>
  );
};

export default HomeRoute;
