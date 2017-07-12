import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
	name: attr('string'),
	email: attr('string'),
	subject: attr('string'),
	message: attr('string'),	
	date_created: attr('date', {
		defaultValue() {
			return new Date();
		}
	})
});