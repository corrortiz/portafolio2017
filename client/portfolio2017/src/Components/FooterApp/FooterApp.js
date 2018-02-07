import React from 'react';
//Internals Component
import AppSnackBar from '../AppSnackBar/AppSnackBar';
import Github from '../../images/SVG/Github';

/**
 * Componet for the layout of the footer
 */
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
        </a>
        <AppSnackBar />
      </div>
    </footer>
  );
};

export default FooterApp;
