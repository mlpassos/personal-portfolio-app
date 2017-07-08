import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('navbar');
  this.route('tabs');
  this.route('home');
  this.route('jobs');
  this.route('job', {path:'page/:jobid'}, function() {
    
  });
  this.route('page', {path:'page/:pageid'}, function() {

  });
  this.route('contact');
  this.route('about');
});

export default Router;
