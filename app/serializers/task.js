import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
      
     
          let response = payload.data
          response.map(function(e) {
            e.id = e._id
            return e
          })

          payload = {
           
            task: response
            
          };
      
        
          return this._super(store, primaryModelClass, payload, id, requestType);
        }
});
