import React from 'react';
import ReactDOM from 'react-dom';

DangerAlert = React.createClass({
  render() {
    return <Alert style="danger">
      { this.props.children }
    </Alert>;
  }
});
