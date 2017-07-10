import Ember from 'ember';

export default Ember.Route.extend({
	firebaseApp: Ember.inject.service(),
	props : {
		title: 'Jobs',
		subtitle: 'Latest Jobs',
		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quibusdam rem eveniet dolores, repellendus sint eligendi earum. Impedit saepe quasi dicta? Accusamus dolore iusto, possimus! In modi amet, maiores eos!'
	},
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
	model() {
		let _this = this;
		let jobs = this.get('jobs');
		return jobs.map(function(job) {
			console.log('jobmap', job);
			return _this.get('firebaseApp').storage().refFromURL('gs://portfolio-app-f9ef9.appspot.com/' + job.thumbnail).getDownloadURL().then(function(url) {
				job.thumbnail = url;
				return job
			});
			// console.log('get', _getThumbnailURL(jobs.thumbnail));
			// return job;
		});
	},
	setupController(controller) {
		this._super(...arguments);
		controller.set('props', this.get('props'));
	}
});