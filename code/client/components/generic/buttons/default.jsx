import React from 'react';
import ReactDOM from 'react-dom';

DefaultButton = React.createClass({
  render() {
    return <Button
      type={ this.props.type }
      style="default"
      label={ this.props.label }
      href={ this.props.href }
      onClick={ this.props.onClick }
    />;
  }
});
