import Ember from 'ember';

export default Ember.Route.extend({
	// model(params) {
	// 	return this.store.findRecord('page', params.pageid);
	// }
	model(params) {
		let response =  {
			title: '',
			content: ''
		}
		// console.log(params.pageid);
		switch (params.pageid) {
			case 'about':
				response.title = 'About';
				response.content = 'About Content';
			break;
			case 'contact':
				response.title = 'Contact';
				response.content = 'Contact Content';
			break;
		}
		return response;
	}
});