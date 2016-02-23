import React from 'react';
import ReactDOM from 'react-dom';

SuccessButton = React.createClass({
  render() {
    return <Button
      type={ this.props.type }
      style="success"
      label={ this.props.label }
      href={ this.props.href }
      onClick={ this.props.onClick }
    />;
  }
});
