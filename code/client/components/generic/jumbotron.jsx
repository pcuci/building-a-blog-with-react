import React from 'react';
import ReactDOM from 'react-dom';

Jumbotron = React.createClass({
  render() {
    let classes = this.props.className ? `jumbotron ${ this.props.className }`: 'jumbotron';
    return <div className={ classes }>
      { this.props.children }
    </div>;
  }
});
