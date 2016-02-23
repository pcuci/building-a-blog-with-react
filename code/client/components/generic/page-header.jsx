import React from 'react';
import ReactDOM from 'react-dom';

PageHeader = React.createClass({
  renderPageHeader() {
    let headers = {
      h1: <h1>{ this.props.label }</h1>,
      h2: <h2>{ this.props.label }</h2>,
      h3: <h3>{ this.props.label }</h3>,
      h4: <h4>{ this.props.label }</h4>,
      h5: <h5>{ this.props.label }</h5>,
      h6: <h6>{ this.props.label }</h6>
    };

    return headers[ this.props.size ];
  },
  render() {
    return this.renderPageHeader();
  }
});
