import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

const Router = Ember.Router.extend(googlePageview, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('jobs');
  this.route('job', function() {
    this.route('add', {path:'job/add'});
    this.route('view', {path:':slug'});
  });
  this.route('page', function() {
    this.route('about');
    this.route('contact');
    this.route('home');
  });
  this.route('loading');
});

export default Router;
