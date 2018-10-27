import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    // console.log(payload, "this is the payload while creating the reccord and pushing back to the model")
    
    if (requestType === 'createRecord') {
      payload.payload.data.id = payload.payload.data._id
    }
    else  {
      payload.payload.data.map(function(e) {
      e.id = e._id
      return e
    })
  }
    
    payload = {
      message: payload.payload.data
    };

    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});