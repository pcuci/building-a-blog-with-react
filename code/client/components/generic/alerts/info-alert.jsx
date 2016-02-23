import React from 'react';
import ReactDOM from 'react-dom';

InfoAlert = React.createClass({
  render() {
    return <Alert style="info">
      { this.props.children }
    </Alert>;
  }
});
