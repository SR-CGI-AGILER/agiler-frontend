import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {

        if (requestType === 'createRecord') {
           
           payload.data.id = payload.data._id
           payload = payload.data
        }else if ( requestType === 'findAll' ) {
          payload = payload.data.map(function(e) {
            e.id = e._id
            return e
          });
        }
      
     
        payload = {
         
          team: payload
          
        };
    
    console.log(payload,"qwety")
        return this._super(store, primaryModelClass, payload, id, requestType);
      }
});
