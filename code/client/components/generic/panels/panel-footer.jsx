import React from 'react';
import ReactDOM from 'react-dom';

PanelFooter = React.createClass({
  render() {
    return <div className="panel-footer">
      { this.props.children }
    </div>;
  }
});
