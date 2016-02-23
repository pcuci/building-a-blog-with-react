import React from 'react';
import ReactDOM from 'react-dom';

RepeatPasswordInput = React.createClass({
  render() {
    return <FormControl
      ref={ this.props.ref }
      showLabel={ this.props.showLabel }
      labelLink={ this.props.labelLink }
      style="input"
      name="repeatPassword"
      type="password"
      label="Repeat Password"
    />;
  }
});
