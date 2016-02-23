import React from 'react';
import ReactDOM from 'react-dom';

DangerButton = React.createClass({
  render() {
    return <Button
      type={ this.props.type }
      style="danger"
      label={ this.props.label }
      href={ this.props.href }
      onClick={ this.props.onClick }
    />;
  }
});
