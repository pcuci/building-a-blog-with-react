import React from 'react';
import ReactDOM from 'react-dom';

PanelHeading = React.createClass({
  render() {
    return <div className="panel-heading">
      { this.props.children }
    </div>;
  }
});
