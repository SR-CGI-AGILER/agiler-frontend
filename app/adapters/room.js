import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
	buildURL() {
		return `http://localhost:3000/api/v1/user/mddd34/rooms`
	},
	
	createRecord(store, type, snapshot) {
		let data = snapshot.attr('roomName');
		return new Promise((resolve) => { 
			Ember.$.ajax({
				type: "POST",
        		url: `http://localhost:3000/api/v1/chat-room/${snapshot.attr('roomName')}`,
            	data: { "members" : "mddd34" }
            });
		})
	}
});
