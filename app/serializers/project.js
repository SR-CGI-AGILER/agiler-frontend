import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
     
    if(payload.data) {
      payload = payload.data.map(function(e) {
         
         e.id = e._id
         return e
      })
    }else {
      payload = payload.payload.map(function(e) {
        e.id = e._id
        return e
      });

    }
     
   
 
    payload = {
     
      project: payload
      
    };

 
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
