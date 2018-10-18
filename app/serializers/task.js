import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
      
      console.log(payload.data);
          let response = payload.data
          response.map(function(e) {
            e.id = e._id
            return e
          })
          console.log(response, "asdjahskjdhkajshdkjas")
          payload = {
           
            task: response
            
          };
      
          // console.log(payload);
          return this._super(store, primaryModelClass, payload, id, requestType);
        }
});
