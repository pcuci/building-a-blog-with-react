import React from 'react';
import ReactDOM from 'react-dom';

GridRow = React.createClass({
  render() {
    return <div className="row">
      { this.props.children }
    </div>;
  }
});
