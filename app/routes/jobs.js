import Ember from 'ember';

export default Ember.Route.extend({
	firebaseApp: Ember.inject.service(),
	// loaded: Ember.inject.service(),
	// promises: [],
	props : {
		title: 'Jobs',
		subtitle: 'Latest Jobs',
		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quibusdam rem eveniet dolores, repellendus sint eligendi earum. Impedit saepe quasi dicta? Accusamus dolore iusto, possimus! In modi amet, maiores eos!'
	},
	// jobs: [
	// 	{
	// 		title:'Lançamento camisa Topper Clube do Remo',
	// 		thumbnail: 'hotsite-remo-featured.jpg',
	// 		slug: 'hotsite-remo-featured',
	// 		excerpt: 'Job #1 Excerpt',
	// 		content: 'Job Content'
	// 	},
	// 	{
	// 		title:'Histórias que contam 2016',
	// 		thumbnail: 'historias-que-contam-2016.jpg',
	// 		slug: 'historias-que-contam-2016',
	// 		excerpt: 'Job #2 Excerpt',
	// 		content: 'Job Content'
	// 	},
	// 	{
	// 		title:'Pará Responde',
	// 		thumbnail: 'para-responde.jpg',
	// 		slug: 'para-responde',
	// 		excerpt: 'Job #2 Excerpt',
	// 		content: 'Job Content'
	// 	},
	// 	{
	// 		title:'e-pautas',
	// 		thumbnail: 'e-pautas.jpg',
	// 		slug: 'e-pautas',
	// 		excerpt: 'Job #2 Excerpt',
	// 		content: 'Job Content'
	// 	},
	// 	{
	// 		title:'JEPS 2017',
	// 		thumbnail: 'jeps-2017.jpg',
	// 		slug: 'jeps-2017',
	// 		excerpt: 'Job #2 Excerpt',
	// 		content: 'Job Content'
	// 	},
	// 	{
	// 		title:'Agência Belém',
	// 		thumbnail: 'agencia-belem.jpg',
	// 		slug: 'agencia-belem',
	// 		excerpt: 'Job #2 Excerpt',
	// 		content: 'Job Content'
	// 	},
	// 	{
	// 		title:'Pinte o 7',
	// 		thumbnail: 'pinte-o-7.png',
	// 		slug: 'pinte-o-7',
	// 		excerpt: 'Job #2 Excerpt',
	// 		content: 'Job Content'
	// 	},
	// 	{
	// 		title:'Secom App',
	// 		thumbnail: 'secom-app.jpg',
	// 		slug: 'secom-app',
	// 		excerpt: 'Job #2 Excerpt',
	// 		content: 'Job Content'
	// 	},
	// 	{
	// 		title:'Demandou',
	// 		thumbnail: 'secom-demandou.png',
	// 		slug: 'demandou',
	// 		excerpt: 'Job #2 Excerpt',
	// 		content: 'Job Content'
	// 	},
	// 	{
	// 		title:'Secom PSS',
	// 		thumbnail: 'secom-pss.png',
	// 		slug: 'secom-pss',
	// 		excerpt: 'Job #2 Excerpt',
	// 		content: 'Job Content'
	// 	},
	// 	{
	// 		title:'Provital Quiropraxia',
	// 		thumbnail: 'provital-quiropraxia.jpg',
	// 		slug: 'provital-quiropraxia',
	// 		excerpt: 'Job #2 Excerpt',
	// 		content: 'Job Content'
	// 	}
	// ],
	_getThumbnailURL: function(_this, thumbnail) {
		console.log('getThumbnail', thumbnail);
		var promise =  new Ember.RSVP.Promise(function(resolve, reject) {
			_this.get('firebaseApp').storage().refFromURL('gs://portfolio-app-f9ef9.appspot.com/' + thumbnail).getDownloadURL().then(function(url) {
				resolve(url);
			}, function() {
		        reject(new Error('getJSON: failed'));
		    });
		});
		return promise;
	},
	// deactivate() {
	// 	let promises = this.get('promises');
	// 	promises.clear();
	// },
	model() {

		var _this = this;
		var store = this.get('store');
		// let jobs = this.get('jobs');
		// var loaded = this.get('loaded');
		// console.log('loaded?', loaded.getState());
		let getThumbnailURL = this.get('_getThumbnailURL');
		let promises = [];


		return this.store.findAll('job').then(function(jobs) {
			// console.log('JOBS', jobs);
			jobs.map(function(job) {
				console.log('URL', job.get('thumbnail').substr(0, 5));
				if (job.get('thumbnail').substr(0, 5) === 'https') {
					console.log('JA TEM URL FORMADA');
				} else  {
					job.set('thumbnail', getThumbnailURL(_this, job.get('thumbnail')));
					promises.pushObject(job.get('thumbnail'));
				}
			});

			console.log('thumbpromises', promises.get('length'));
			if (promises.get('length') > 0) {
				return Ember.RSVP.allSettled(promises).then(function(values) {
					// console.log('valor final promises: ', values[0]);
					jobs.map(function(job, index) {
						job.set('thumbnail', values[index].value);
					});
					// loaded.toggleState(true);
					// console.log('já loaded?', loaded.getState());
					return jobs;
				});
			} else {
				return jobs
			}
		});

		// if (!loaded.getState()) {
		// 	console.log('sem loaded', loaded);
		// 	var getThumbnailURL = this.get('_getThumbnailURL');
			
		// 	jobs.map(function(job) {
		// 		console.log('jobmap', job);
		// 		let jobRecord = store.createRecord('job', job);
		// 		jobRecord.save().then(function() {
		// 			console.log('saved!!');
		// 		});
		// 		job.thumbnail = getThumbnailURL(_this, job.thumbnail);
		// 	});
		// 	var promises = jobs.map(function(job, index) {
		// 		return jobs[index].thumbnail;
		// 	});
		// 	console.log('promises', promises);
		// 	return Ember.RSVP.allSettled(promises).then(function(values) {
		// 		console.log('valor final: ', values[0]);
		// 		jobs.map(function(job, index) {
		// 			job.thumbnail = values[index].value;
		// 		})
		// 		loaded.toggleState(true);
		// 		console.log('já loaded?', loaded.getState());
		// 		return jobs;
		// 	});
		// } else {
		// 	console.log('já loaded', loaded.getState());
		// 	return jobs;
		// }
	},
	setupController(controller) {
		this._super(...arguments);
		controller.set('props', this.get('props'));
	}
});