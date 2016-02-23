import React from 'react';
import ReactDOM from 'react-dom';

LinkButton = React.createClass({
  render() {
    return <Button
      type={ this.props.type }
      style="link"
      label={ this.props.label }
      href={ this.props.href }
      onClick={ this.props.onClick }
    />;
  }
});
