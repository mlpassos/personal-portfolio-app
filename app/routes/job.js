import Ember from 'ember';

export default Ember.Route.extend({
	// slug:'',
	// model(params) {
	// 	let id = params.slug;
	// 	this.set('slug', id);
	// 	console.log('estamos aqui!');
	// 	return this.store.findRecord('post', id);	
	// }
	firebaseApp: Ember.inject.service(),
	jobs: [
		{
			title:'Job #1 title',
			thumbnail: 'hotsite-remo-featured.jpg',
			slug: 'job-1-title',
			excerpt: 'Job #1 Excerpt',
			content: 'Job Content'
		},
		{
			title:'Job #2 title',
			thumbnail: 'historias-que-contam-2016.jpg',
			slug: 'job-2-title',
			excerpt: 'Job #2 Excerpt',
			content: 'Job Content'
		}
	],
	_getThumbnailURL: function(thumbnail) {
		let _this = this;
		return _this.get('firebaseApp').storage().refFromURL('gs://portfolio-app-f9ef9.appspot.com/' + thumbnail).getDownloadURL().then(function(url) {
			return url;
		});
	},
	model(params) {
		let _this = this;
		let jobs = this.get('jobs');
		let slug = params.slug;
		// let getThumbnailURL = this.get('_getThumbnailURL');
		// console.log('get', getThumbnailURL('teste'));
		
		// let storageRef = window.firebase.storage().ref();
		// console.log('storageRef', storageRef);
		// console.log('storageRef', storageRef.child('hotsite-remo-featured.jpg'));
		return jobs.filter(function(job) {
			return job.slug === slug;
		}).map(function(job) {
			console.log('jobmap', job);
			return _this.get('firebaseApp').storage().refFromURL('gs://portfolio-app-f9ef9.appspot.com/' + job.thumbnail).getDownloadURL().then(function(url) {
				job.thumbnail = url;
				return job
			});
			// console.log('get', _getThumbnailURL(jobs.thumbnail));
			// return job;
		}).reduce(function(a) {
			return a;
		});
	}
});