import React, { Component } from 'react';
//Internal Components
import Logo from '../../../images/SVG/Logo';
class FourOFour extends Component {
  render() {
    return (
      <div className="FourOFour">
        <h1 className="FourOFour__Message">NOUP NOUP NOUP</h1>
        <Logo className="FourOFour__Logo" />
        <h3 className="FourOFour__404">404</h3>
      </div>
    );
  }
}

export default FourOFour;
