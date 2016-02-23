import React from 'react';
import ReactDOM from 'react-dom';

NavBar = React.createClass({
  render() {
    return <nav className="navbar navbar-light bg-faded" role="navigation">
      <div className="container">
        <a className="navbar-brand" href={ this.props.brandLink }>{ this.props.brand }</a>
        { this.props.children }
      </div>
    </nav>;
  }
});
