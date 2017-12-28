// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * This is a HOC for the globals redux state
 * @param {*Componetn to recibe globals state} WrappedComponent
 * First a function is created that receives the component that we are going to wrap as a
 * parameter, this function returns the wrapped component to which the new properties are added
 * through Redux Connect, which are chosen by the functions mapStateToProps and mapDispachToProps
 */
const GlobalsConnect = WrappedComponent => {
  /**
   * New class that is necessary to connect to redux
   */
  class NameWrappedComponent extends Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  /**
   * Here we choose the redux states to pass
   * @param {*} state
   */
  const mapStateToProps = state => {
    return {
      globals: state.globals
    };
  };
  /**
   * Here we connect the react-redux HOC and the new class
   */
  return connect(mapStateToProps, undefined)(NameWrappedComponent);
};

export default GlobalsConnect;
