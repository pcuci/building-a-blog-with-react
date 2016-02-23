import React from 'react';
import ReactDOM from 'react-dom';

InfoButton = React.createClass({
  render() {
    return <Button
      type={ this.props.type }
      style="info"
      label={ this.props.label }
      href={ this.props.href }
      onClick={ this.props.onClick }
    />;
  }
});
