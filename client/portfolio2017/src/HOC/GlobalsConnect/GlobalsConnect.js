// @flow
import React from 'react';
import { connect } from 'react-redux';

const GlobalsConnect = WrappedComponent =>
  class NameWrappedComponent extends WrappedComponent {
    render() {
      const newProps = this.props.globals;

      return <WrappedComponent {...this.props} {...newProps} />;
    }
  };

function mapStateToProps(state) {
  return {
    globals: state.globals
  };
}

export default connect(mapStateToProps)(GlobalsConnect);
