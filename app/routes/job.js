import Ember from 'ember';

export default Ember.Route.extend({
// 	// slug:'',
// 	// model(params) {
// 	// 	let id = params.slug;
// 	// 	this.set('slug', id);
// 	// 	console.log('estamos aqui!');
// 	// 	return this.store.findRecord('post', id);	
// 	// }
// 	firebaseApp: Ember.inject.service(),
// 	// jobs: [
// 	// 	{
// 	// 		title:'Job #1 title',
// 	// 		thumbnail: 'hotsite-remo-featured.jpg',
// 	// 		slug: 'job-1-title',
// 	// 		excerpt: 'Job #1 Excerpt',
// 	// 		content: 'Job Content'
// 	// 	},
// 	// 	{
// 	// 		title:'Job #2 title',
// 	// 		thumbnail: 'historias-que-contam-2016.jpg',
// 	// 		slug: 'job-2-title',
// 	// 		excerpt: 'Job #2 Excerpt',
// 	// 		content: 'Job Content'
// 	// 	}
// 	// ],
// 	_getThumbnailURL: function(thumbnail) {
// 		var _this = this;
// 		var promise =  new Ember.RSVP.Promise(function(resolve, reject) {
// 			_this.get('firebaseApp').storage().refFromURL('gs://portfolio-app-f9ef9.appspot.com/' + thumbnail).getDownloadURL().then(function(url) {
// 				resolve(url);
// 			}, function() {
// 		        reject(new Error('getJSON: `' + commentId + '` failed with status: [' + this.status + ']'));
// 		    });
// 		});
// 		return promise;
// 	},
// 	model(params) {
// 		console.log('job route', params);
// 		// let _this = this;
// 		// let jobs = this.get('jobs');
// 		// console.log('params', params);
// 		// var getThumbnailURL = this.get('_getThumbnailURL');

// 		// return jobs.filter(function(job) {
// 		// 	return job.slug === slug;
// 		// }).map(function(job) {
// 		// 	console.log('jobmap', job);
// 		// 	return getThumbnailURL(job.thumbnail).then(function(url) {
// 		// 		job.thumbnail = url;
// 		// 		return job;
// 		// 	});
// 		// }).reduce(function(a) {
// 		// 	return a;
// 		// });
// 	}
});