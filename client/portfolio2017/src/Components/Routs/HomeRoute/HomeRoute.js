import React from 'react';
//Internal Components
import ImageContainer from '../../ImageContainer/ImageContainer';
import PresentationRightToLeft from '../../PresentationRightToLeft/PresentationRightToLeft';
import PresentationLeftToRight from '../../PresentationLeftToRight/PresentationLeftToRight';
import PresentationBottomToTop from '../../PresentationBottomToTop/PresentationBottomToTop';

/**
 * layout of the home rout container
 */
const HomeRoute = () => {
  return (
    <div>
      <ImageContainer />
      <PresentationRightToLeft />
      <PresentationLeftToRight />
      <PresentationBottomToTop />
    </div>
  );
};

export default HomeRoute;
