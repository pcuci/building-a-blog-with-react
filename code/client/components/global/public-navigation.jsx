import React from 'react';
import ReactDOM from 'react-dom';

PublicNavigation = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      items: {
        right: [
          { uid: 'login', href: '/login', label: 'Log In' }
        ]
      }
    };
  },
  render() {
    return <div className="public-navigation">
      <NavBarNavigation items={ this.data.items.right } />
    </div>;
  }
});
