import Ember from 'ember';

export default Ember.Service.extend({
	state: false,
	toggleState(state) {
		this.set('state', state);
	},
	getState(state) {
		return this.get('state');
	}
});