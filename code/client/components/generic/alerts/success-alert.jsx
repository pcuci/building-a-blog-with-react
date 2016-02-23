import React from 'react';
import ReactDOM from 'react-dom';

SuccessAlert = React.createClass({
  render() {
    return <Alert style="success">
      { this.props.children }
    </Alert>;
  }
});
