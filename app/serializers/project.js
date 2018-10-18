import DS from 'ember-data';
import { map } from 'rsvp';
primaryKey: 'id';
export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
  
    payload = payload.data.map(function(e) {
      e.id = e._id
      return e
    })
    console.log(payload)
 
    payload = {
     
      project: payload
      
    };

    console.log(payload);
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});