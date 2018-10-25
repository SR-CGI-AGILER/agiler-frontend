import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    debugger
    if(payload.data) {
      payload = payload.data.map(function(e) {
        debugger
         e.id = e._id
         return e
      })
    }else {
      payload = payload.payload.map(function(e) {
        e.id = e._id
        return e
      });

    }
    debugger
    console.log(payload, "inside seriklajsld")
 
    payload = {
     
      project: payload
      
    };

    // console.log(payload);
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
