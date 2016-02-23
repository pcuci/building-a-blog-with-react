import React from 'react';
import ReactDOM from 'react-dom';

WarningAlert = React.createClass({
  render() {
    return <Alert style="warning">
      { this.props.children }
    </Alert>;
  }
});
