import React from 'react';
import ReactDOM from 'react-dom';

FormGroup = React.createClass({
  render() {
    return <div className="form-group">
      { this.props.children }
    </div>;
  }
});
