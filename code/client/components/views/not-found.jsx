import React from 'react';
import ReactDOM from 'react-dom';

NotFound = React.createClass({
  render() {
    return <DangerAlert>
      <strong>Error [404]</strong>: { FlowRouter.current().path } does not exist.
    </DangerAlert>;
  }
});
