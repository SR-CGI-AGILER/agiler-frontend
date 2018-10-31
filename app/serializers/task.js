import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
      
     
          // let response = payload.data
          // response.map(function(e) {
          //   e.id = e._id
          //   return e
          // })
          debugger
          if (requestType === 'createRecord') {
            debugger
            payload.data.id = payload.data._id
             payload = payload.data
           }else if(requestType === 'query') {
             debugger
            payload = payload.data.map(function(e) {    
               e.id = e._id
               return e
            })
          }else {
            debugger
            payload = payload.payload.map(function(e) {    
              e.id = e._id
              return e
            })
          }
          payload = {
           
            task: payload
            
          };
          
      
        
          return this._super(store, primaryModelClass, payload, id, requestType);
        }
});
