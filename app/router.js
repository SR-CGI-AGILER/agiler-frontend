import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('create-team', function() {
    this.route('integrations');
    this.route('invite-members');
    this.route('team-name');
  });
  this.route('startdiscussion');
  this.route('discuss');
  this.route('my-projects');
  this.route('project-view', {path:'/project-view/:id'});
  this.route('my-team-projects');
});

export default Router;
