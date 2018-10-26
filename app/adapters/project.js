import DS from 'ember-data';
import {inject as service} from '@ember/service';

import Em from 'ember';


export default DS.RESTAdapter.extend({

	session: service('session'),
    buildURL(modelName, id, snapshot, requestType, query){
        if (query) {
            return  `http://localhost:8000/api/v1/teams/${query.assignTo.teamId}/projects`;
        }else {
            let memberId =this.get('session').session.content.authenticated.userdata.id;
            return `http://localhost:8000/api/v1/member/${memberId}/projects/`;
            
        }
    },

    deleteRecord(store, type, snapshot){
   
        let data = this.serialize(snapshot);
      
          return new Promise(function (resolve, reject)  {

              Em.$.ajax({
                async: true,
                crossDomain: true,
                 type: "DELETE",
                 contentType: "application/json",
                 data: JSON.stringify(data),
                 url: `http://localhost:8000/api/v1/project/${snapshot.id}`,
                 success: {
                    200: ()=>{
                        Em.run(null, resolve);
                    }
                 }
              })
          })
    }
})