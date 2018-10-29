import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    // let data = payload.payload.map(function (e) {
    //   e.id = e.id
    //   return e
    // });
    payload = {
      users: payload.payload
    }
    console.log(payload, "this is the serializer")
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});