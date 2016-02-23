import React from 'react';
import {mount} from 'react-mounter';

const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated'
});

authenticatedRoutes.route('/posts', {
  name: 'posts',
  action() {
    mount(App, { yield: <PostsList /> });
  }
});

authenticatedRoutes.route('/posts/:_id/edit', {
  name: 'editor',
  action(params) {
    mount(App, { yield: <Editor post={ params._id } /> });
  }
});
