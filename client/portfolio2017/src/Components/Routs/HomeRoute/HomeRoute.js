import React from 'react';

import ImageContainer from '../../ImageContainer/ImageContainer';
import TwoColumPresentation from '../../TwoColumPresentation/TwoColumPresentation';
import TwoColumPresentationLeftToRight from '../../TwoColumPresentationLeftToRight/TwoColumPresentationLeftToRight';
import TwoRowPresentation from '../../TwoRowPresentation/TwoRowPresentation';

const HomeRoute = () => {
  return (
    <div>
      <ImageContainer />
      <TwoColumPresentation />
      <TwoColumPresentationLeftToRight />
      <TwoRowPresentation />
    </div>
  );
};

export default HomeRoute;
