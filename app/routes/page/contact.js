import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.createRecord('contact');
	},
	actions: {
		enviarEmail(email) {
			
			if (!email.get('name') || !email.get('subject') || !email.get('email') || !email.get('message')) {
				alert('There are required fields, fellow. =)');
			} else {
				email.save().then(function() {
					alert('Message sent!');
				});
			}
			
		}
	}
});