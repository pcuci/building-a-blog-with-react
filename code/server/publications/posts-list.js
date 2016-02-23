import Posts from '/imports/collections/posts'

Meteor.publish('postsList', () => {
  return Posts.find();
});
