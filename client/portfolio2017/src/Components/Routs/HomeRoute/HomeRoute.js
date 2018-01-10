import React from 'react';

import ImageContainer from '../../ImageContainer/ImageContainer';
import TwoColumPresentation from '../../TwoColumPresentation/TwoColumPresentation';
import TwoColumPresentationLeftToRight from '../../TwoColumPresentationLeftToRight/TwoColumPresentationLeftToRight';
import TwoRowPresentationG from '../../TwoRowPresentation/TwoRowPresentationG';

const HomeRoute = () => {
  return (
    <div>
      <ImageContainer />
      <TwoColumPresentation />
      <TwoColumPresentationLeftToRight />
      <TwoRowPresentationG />
    </div>
  );
};

export default HomeRoute;
