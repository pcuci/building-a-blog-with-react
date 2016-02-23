import React from 'react';
import ReactDOM from 'react-dom';

PanelBody = React.createClass({
  render() {
    return <div className="panel-body">
      { this.props.children }
    </div>;
  }
});
