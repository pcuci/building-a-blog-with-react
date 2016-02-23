import Posts from '/imports/collections/posts'

Meteor.publish('singlePost', (postSlug) => {
  check(postSlug, String);

  return Posts.find({ slug: postSlug });
});
