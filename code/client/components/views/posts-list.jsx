import React from 'react';
import ReactDOM from 'react-dom';
import Posts from '/imports/collections/posts'

PostsList = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    Meteor.subscribe('postsList');

    return {
      posts: Posts.find().fetch().map((post) => {
        return { uid: post._id, href: `/posts/${ post._id }/edit`, label: post.title };
      })
    };
  },
  handleNewPost() {
    Meteor.call('newPost', (error, postId) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        FlowRouter.go(`/posts/${ postId }/edit`);
        Bert.alert('All set! Get to typin\'', 'success');
      }
    });
  },
  renderPostsList() {
    if (this.data.posts.length > 0) {
      return <ListGroup linked={ true } items={ this.data.posts } />;
    } else {
      return <WarningAlert>No posts found.</WarningAlert>;
    }
  },
  render() {
    return <GridRow>
      <GridColumn className="col-xs-12 col-sm-8">
        <PageHeader size="h4" label="Posts" />
        <SuccessButton type="button" label="New Post" onClick={ this.handleNewPost } />
        { this.renderPostsList() }
      </GridColumn>
    </GridRow>;
  }
});
