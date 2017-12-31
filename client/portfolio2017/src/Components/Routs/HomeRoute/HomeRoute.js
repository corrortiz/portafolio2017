import React from 'react';

import ImageContainer from '../../ImageContainer/ImageContainer';
import TwoColumPresentation from '../../TwoColumPresentation/TwoColumPresentation';

const HomeRoute = () => {
  return (
    <div>
      <ImageContainer />
      <TwoColumPresentation />
      <h1 className="min">Kirir</h1>
    </div>
  );
};

export default HomeRoute;
