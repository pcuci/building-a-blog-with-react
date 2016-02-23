import React from 'react';
import ReactDOM from 'react-dom';

Alert = React.createClass({
  render() {
    return <p className={ `alert alert-${ this.props.style }` }>
      { this.props.children }
    </p>;
  }
});
