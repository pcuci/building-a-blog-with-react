import React from 'react';
import ReactDOM from 'react-dom';

AppHeader = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      brandLink: !!Meteor.user() ? '/posts' : '/',
      user: Meteor.user()
    };
  },
  render() {
    return <NavBar id="app-header" brandLink={ this.data.brandLink } brand="Blog">
      { this.props.hasUser ? <AuthenticatedNavigation user={ this.data.user } /> : <PublicNavigation /> }
    </NavBar>;
  }
});
