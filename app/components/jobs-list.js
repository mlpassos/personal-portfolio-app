import Ember from 'ember';

export default Ember.Component.extend({
	// actions: {
		routing: Ember.inject.service(),
		init() {
			this._super(...arguments);
			console.log('Iniciando componente...');
		},
		didInsertElement() {
			  // debugger;
		    let $grid = this.$('.isogrid').isotope({
		      // options
		      itemSelector: '.isoitem',
		      // layoutMode: 'fitRows',
		      percentPosition: true
		      // ,
		      // columnWidth: '.grid-sizer'
		    });
		    $grid.imagesLoaded().progress( function() {
		      $grid.isotope('layout');
		    });  
		},
		actions: {
			lerMais(job) {
				console.log(job);
				this.get('routing').transitionTo('job', job);
			}
		}
});