import React from 'react';
import {mount} from 'react-mounter';

const publicRoutes = FlowRouter.group({
  name: 'public'
});

publicRoutes.route('/', {
  name: 'index',
  action() {
    mount(App, { yield: <PostsIndex /> });
  }
});

publicRoutes.route('/posts/:slug', {
  name: 'singlePost',
  action(params) {
    mount(App, { yield: <SinglePost slug={ params.slug } /> });
  }
});

publicRoutes.route('/tags/:tag', {
  name: 'tagIndex',
  action(params) {
    mount(App, { yield: <PostsIndex tag={ params.tag } /> });
  }
});

publicRoutes.route('/login', {
  name: 'login',
  action() {
    mount(App, { yield: <Login /> });
  }
});

publicRoutes.route('/recover-password', {
  name: 'recoverPassword',
  action() {
    mount(App, { yield: <RecoverPassword /> });
  }
});

publicRoutes.route('/reset-password/:token', {
  name: 'resetPassword',
  action(params) {
    mount(App, { yield: <ResetPassword token={ params.token } /> });
  }
});
