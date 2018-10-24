import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
  
    payload = payload.payload.map(function(e) {
      e.id = e._id
      return e
    });
    // console.log(payload)
 
    payload = {
     
      project: payload
      
    };

    // console.log(payload);
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
