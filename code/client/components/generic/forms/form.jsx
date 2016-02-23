import React from 'react';
import ReactDOM from 'react-dom';

Form = React.createClass({
  handleSubmit(event) {
    event.preventDefault();
  },
  componentDidMount() {
    let validations = this.props.validations;

    if (validations) {
      $(this.refs.form).validate(validations);
    }
  },
  render() {
    return <form
      ref="form"
      id={ this.props.id }
      className={ this.props.className }
      onSubmit={ this.handleSubmit }
    >
      { this.props.children }
    </form>;
  }
});
