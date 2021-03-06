import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
	title: attr('string'),
	slug: attr('string'),
	excerpt: attr('string'),
	content: attr('string'),	
	thumbnail: attr('string'),
	date_created: attr('date', {
		defaultValue() {
			return new Date();
		}
	})
});