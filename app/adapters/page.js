import DS from 'ember-data';
console.log('PAGE ADAPter');
export default DS.RESTAdapter.extend({
	host: 'http://www.marciopassos.com/home/api',
	urlForFindRecord(id, modelName) {
		console.log('adapter: ', id);
		return `${this.get('host')}/get_page/?slug=${id}`;
	}
});