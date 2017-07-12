import Ember from 'ember';

export default Ember.Route.extend({
	firebaseApp: Ember.inject.service(),
	loaded: Ember.inject.service(),
	props : {
		title: 'Jobs',
		subtitle: 'Latest Jobs',
		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quibusdam rem eveniet dolores, repellendus sint eligendi earum. Impedit saepe quasi dicta? Accusamus dolore iusto, possimus! In modi amet, maiores eos!'
	},
	jobs: [
		{
			title:'Lançamento camisa Topper Clube do Remo',
			thumbnail: 'hotsite-remo-featured.jpg',
			slug: 'hotsite-remo-featured',
			excerpt: 'Job #1 Excerpt',
			content: 'Job Content'
		},
		{
			title:'Histórias que contam 2016',
			thumbnail: 'historias-que-contam-2016.jpg',
			slug: 'historias-que-contam-2016',
			excerpt: 'Job #2 Excerpt',
			content: 'Job Content'
		},
		{
			title:'Pará Responde',
			thumbnail: 'para-responde.jpg',
			slug: 'para-responde',
			excerpt: 'Job #2 Excerpt',
			content: 'Job Content'
		},
		{
			title:'e-pautas',
			thumbnail: 'e-pautas.jpg',
			slug: 'e-pautas',
			excerpt: 'Job #2 Excerpt',
			content: 'Job Content'
		},
		{
			title:'JEPS 2017',
			thumbnail: 'jeps-2017.jpg',
			slug: 'jeps-2017',
			excerpt: 'Job #2 Excerpt',
			content: 'Job Content'
		},
		{
			title:'Agência Belém',
			thumbnail: 'agencia-belem.jpg',
			slug: 'agencia-belem',
			excerpt: 'Job #2 Excerpt',
			content: 'Job Content'
		},
		{
			title:'Pinte o 7',
			thumbnail: 'pinte-o-7.png',
			slug: 'pinte-o-7',
			excerpt: 'Job #2 Excerpt',
			content: 'Job Content'
		},
		{
			title:'Secom App',
			thumbnail: 'secom-app.jpg',
			slug: 'secom-app',
			excerpt: 'Job #2 Excerpt',
			content: 'Job Content'
		},
		{
			title:'Demandou',
			thumbnail: 'secom-demandou.png',
			slug: 'demandou',
			excerpt: 'Job #2 Excerpt',
			content: 'Job Content'
		},
		{
			title:'Secom PSS',
			thumbnail: 'secom-pss.png',
			slug: 'secom-pss',
			excerpt: 'Job #2 Excerpt',
			content: 'Job Content'
		}
	],
	_getThumbnailURL: function(_this, thumbnail) {
		console.log('getThumbnail', thumbnail);
		var promise =  new Ember.RSVP.Promise(function(resolve, reject) {
			_this.get('firebaseApp').storage().refFromURL('gs://portfolio-app-f9ef9.appspot.com/' + thumbnail).getDownloadURL().then(function(url) {
				resolve(url);
			}, function() {
		        reject(new Error('getJSON: `' + commentId + '` failed with status: [' + this.status + ']'));
		    });
		});
		return promise;
	},
	// deactivate() {
	// 	let jobs = this.get('jobs');
	// 	jobs.clear();
	// },
	model() {

		var _this = this;
		var store = this.get('store');
		let jobs = this.get('jobs');
		var loaded = this.get('loaded');
		console.log('loaded?', loaded.getState());
		var getThumbnailURL = this.get('_getThumbnailURL');
		// if (loaded === false) {
		// 	console.log('false loaded?', loaded.getState());
		// 	return this.store.query('job', {orderBy: 'slug'}).then(function(job) {
		// 		// console.log('jobbie', job.get('slug'));
		// 		job.map(function(jobitem) {
		// 			console.log('jobbie', jobitem.get('slug'));
		// 			jobitem.set('thumbnail', getThumbnailURL(_this, jobitem.get('thumbnail')));
		// 		});
		// 		var promises = job.map(function(jobitem) {
		// 			console.log('thumbie', jobitem.get('thumbnail'));
		// 			return jobitem.get('thumbnail');
		// 			// jobitem.set('thumbnail', getThumbnailURL(_this, jobitem.get('thumbnail')));
		// 		});
		// 		console.log('thumbpromises', promises);
		// 		return Ember.RSVP.allSettled(promises).then(function(values) {
		// 			console.log('valor final promises: ', values[0]);
		// 			job.map(function(jobitem, index) {
		// 				jobitem.set('thumbnail', values[index].value);
		// 			})
		// 			loaded.toggleState(true);
		// 			console.log('já loaded?', loaded.getState());
		// 			return job;
		// 		});
		// 		// return job;
		// 	});
		// } else {
		// 	console.log('já loaded! retorna memoria', loaded.getState());
		// 	return this.store.peekAll('job');
		// }
		// return jobs;
		console.log('loaded', loaded);
		if (!loaded.getState()) {
			console.log('sem loaded', loaded);
			var getThumbnailURL = this.get('_getThumbnailURL');
			
			jobs.map(function(job) {
				console.log('jobmap', job);
				// let jobRecord = store.createRecord('job', job);
				// jobRecord.save().then(function() {
				// 	console.log('saved!!!');
				// });
				job.thumbnail = getThumbnailURL(_this, job.thumbnail);
			});
			var promises = jobs.map(function(job, index) {
				return jobs[index].thumbnail;
			});
			console.log('promises', promises);
			return Ember.RSVP.allSettled(promises).then(function(values) {
				console.log('valor final: ', values[0]);
				jobs.map(function(job, index) {
					job.thumbnail = values[index].value;
				})
				loaded.toggleState(true);
				console.log('já loaded?', loaded.getState());
				return jobs;
			});
		} else {
			console.log('já loaded', loaded.getState());
			return jobs;
		}
	},
	setupController(controller) {
		this._super(...arguments);
		controller.set('props', this.get('props'));
	}
});