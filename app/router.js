import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('developers', function () {
    this.route('new');
    this.route('edit', {path: '/edit/:developer_id'});
    this.route('delete', {path: '/delete/:developer_id'});
  });
  this.route('projects', function () {
    this.route('new');
    this.route('edit', {path: '/edit/:project_id'});
    this.route('delete', {path: '/delete/:project_id'});
  });
  this.route('project', {path: '/project/:project_id'}, function () {
    this.route('board');
  });

  this.route('stories', function() {
    this.route('new', {path: '/new/:project_id'});
    this.route('edit', {path: '/edit/:story_id'});
  });

  this.route('steps', function() {
    this.route('new');
    this.route('edit', {path: '/edit/:step_id'});
    this.route('delete', {path: '/delete/:step_id'});
  });
});

export default Router;
