import DS from 'ember-data';
import Ember from 'ember';
import ENV from 'agiler-frontend/config/environment';
import {
	inject as service
  } from '@ember/service';

export default DS.RESTAdapter.extend({
	session: service('session'),
	buildURL() {
		debugger
		let userid = this.get('session').session.content.authenticated.userdata.id;
		return `http://${ENV.collaborationServerHost}/api/v1/user/${userid}/rooms`
	},
	
	createRecord(store, type, snapshot) {
		let data = snapshot.attr('roomName');
		return new Promise((resolve) => { 
			Ember.$.ajax({
				type: "POST",
        		url: `http://${ENV.collaborationServerHost}/api/v1/chat-room/${snapshot.attr('roomName')}`,
            	data: { "members" : "mddd34" }
            });
		})
	}
});
