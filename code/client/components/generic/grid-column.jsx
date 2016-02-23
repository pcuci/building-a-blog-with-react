import React from 'react';
import ReactDOM from 'react-dom';

GridColumn = React.createClass({
  render() {
    return <div className={ this.props.className }>
      { this.props.children }
    </div>;
  }
});
