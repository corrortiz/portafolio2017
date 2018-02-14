import React, { Component } from 'react';
import anime from 'animejs';

/**
 * SVG animated with anime.js
 */
class CodeAnime extends Component {
  componentDidMount() {
    let el = this.svg; //Get the ref from the component
    // eslint-disable-next-line
    const domNode = anime({
      //Here we put the animation options in a const that we are not to use
      targets: el,
      scale: 1.8,
      rotate: {
        value: 360,
        duration: 1800,
        easing: 'easeInOutSine'
      },
      duration: 1900,
      delay: 250,
      direction: 'alternate',
      loop: true
    });
  }

  render() {
    return (
      <div className="SVG box">
        <svg
          className="SVG__svg"
          viewBox="0 0 24 24"
          ref={
            input => {
              this.svg = input;
            } /*Ref of the SVG*/
          }
        >
          <g fillRule="evenodd" className="SVG__logo lines">
            <path
              className="SVG__path__one"
              d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1 16l-6-2.935v-2.131L11 8v2.199L7.36 12 11 13.796V16zm2-8v2.199L16.64 12 13 13.796V16l6-2.935v-2.131L13 8z"
            />
          </g>
        </svg>
      </div>
    );
  }
}

export default CodeAnime;
