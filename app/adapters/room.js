import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	buildURL() {
		return `http://localhost:3000/api/v1/user/mddd34/rooms`
	}
});
