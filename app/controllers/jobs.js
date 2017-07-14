import Ember from 'ember';

export default Ember.Controller.extend({
	// firebaseApp: Ember.inject.service(),
	// promises: [],
	// _getThumbnailURL: function(_this, thumbnail) {
	// 	console.log('getThumbnail', thumbnail);
	// 	var promise =  new Ember.RSVP.Promise(function(resolve, reject) {
	// 		_this.get('firebaseApp').storage().refFromURL('gs://portfolio-app-f9ef9.appspot.com/' + thumbnail).getDownloadURL().then(function(url) {
	// 			resolve(url);
	// 		}, function() {
	// 	        reject(new Error('getJSON: failed'));
	// 	    });
	// 	});
	// 	return promise;
	// },
	// thumbnail_url: Ember.computed('model', function() {
	//   let model = this.get('model');
	//   let _this = this;
	//   let promises = this.get('promises');
	//   let getThumbnailURL = this.get('_getThumbnailURL');
	//   model.map(function(job) {
	//   	let origem = job.get('thumbnail');
	//   	job.set('thumbnail', getThumbnailURL(_this, origem));
	//   	promises.pushObject(job.get('thumbnail'));
	//   });
	//     return Ember.RSVP.allSettled(promises).then(function(values) {
	// 		console.log('valor final promises: ', values[0]);
	// 		model.map(function(job, index) {
	// 			job.set('thumbnail', values[index].value);
	// 		})
	// 		return model;
	//     });
	// }),
	// isController: true
});
