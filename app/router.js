import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('jobs');
  this.route('job', {path:'job/:slug'}, function() {
    
  });
  this.route('page', {path:'page/:pageid'}, function() {

  });
  this.route('contact');
  this.route('about');
  this.route('loading');
});

export default Router;
