import Ember from 'ember';

export default Ember.Route.extend({
	firebaseApp: Ember.inject.service(),
	_getThumbnailURL: function(_this, thumbnail) {
		// var _this = this;
		var promise =  new Ember.RSVP.Promise(function(resolve, reject) {
			_this.get('firebaseApp').storage().refFromURL('gs://portfolio-app-f9ef9.appspot.com/' + thumbnail).getDownloadURL().then(function(url) {
				resolve(url);
			}, function() {
		        reject(new Error('getJSON: `' + commentId + '` failed with status: [' + this.status + ']'));
		    });
		});
		return promise;
	},
	model(params) {
		let _this = this;
		let getThumbnailURL = this.get('_getThumbnailURL');
		let slug = params.slug;
		console.log('job.view', params.slug);
		return this.store.query('job', {orderBy: 'slug', equalTo: slug }).then(function(job) {
			console.log('job model', job.get('firstObject').get('thumbnail'));
			if (job.get('firstObject').get('thumbnail').substr(0, 5) === 'https') {
				console.log('JA TEM URL FORMADA');
				return job.get('firstObject');
			} else  {
				console.log('SEM URL FORMADA');
				return getThumbnailURL(_this, job.get('firstObject').get('thumbnail')).then(function(url) {
					job.get('firstObject').set('thumbnail', url);
					return job.get('firstObject');
					// console.log('url', url);
				});
			}
			
			// return job.get('firstObject');
			// let item = job.get('firstObject');
			// return getThumbnailURL(job.get('firstObject').get('thumbnail')).then(function(url) {
			// 	job.get('firstObject').set('thumbnail', url);
			// 	return job;
			// });
		});

		// var getThumbnailURL = this.get('_getThumbnailURL');

		// return jobs.filter(function(job) {
		// 	return job.slug === slug;
		// }).map(function(job) {
		// 	console.log('jobmap', job);
		// 	return getThumbnailURL(job.thumbnail).then(function(url) {
		// 		job.thumbnail = url;
		// 		return job;
		// 	});
		// }).reduce(function(a) {
		// 	return a;
		// });


	}
});
