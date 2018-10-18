import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('my-projects');
  this.route('project-view', {path:'/project-view/:id'});
});

export default Router;
