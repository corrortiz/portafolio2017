import React from 'react';
//Internals Component
import Github from '../../images/SVG/Github';
//HOC for Globals variables
import { lenguajeSelector } from '../../Store/Actions/globals';
import GC from '../../HOC/GlobalsConnect/GlobalsConnect';
/**
 * Componet for the layout of the footer
 */
const FooterApp = props => {
  const { lenguaje } = props.globals;
  const { title } = props;
  return (
    <footer className="footer">
      <h4 className="footer__title">{`AO HyS ${lenguajeSelector(
        lenguaje,
        title
      )}`}</h4>
      <a
        href="https://github.com/corrortiz"
        target="blank"
        className="footer__hyperlink"
      >
        <Github />
      </a>
    </footer>
  );
};

export default GC(FooterApp);
