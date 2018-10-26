import DS from 'ember-data';

export default DS.RESTSerializer.extend({  
    normalizeResponse(store, primaryModelClass, payload, id, requestType){
		let data = payload.payload.data.map(function(e) {
			e.id = e._id
			return e
		})	
		payload={
			room : data
		}	
		// console.log(payload,"I am payload for room")	
	return this._super(store, primaryModelClass, payload, id, requestType);
	}
});
