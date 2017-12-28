// @flow
import React from 'react';

import AppSnackBar from '../AppSnackBar/AppSnackBar';

import Github from '../../images/SVG/Github';

const FooterApp = () => {
  return (
    <footer className="footer">
      <div className="footer__divider">
        <h4 className="footer__title">AO HyS PortFolio</h4>
        <a
          href="https://github.com/corrortiz"
          target="blank"
          className="footer__hyperlink"
        >
          <Github />
          <AppSnackBar />
        </a>
      </div>
    </footer>
  );
};

export default FooterApp;
