import Posts from '/imports/collections/posts'

Meteor.methods({
  newPost() {
    return Posts.insert({});
  }
});
