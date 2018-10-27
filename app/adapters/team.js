import DS from 'ember-data';
import ENV from 'agiler-frontend/config/environment';

import {inject as service} from '@ember/service';
export default DS.RESTAdapter.extend({
    session: service('session'),

    buildURL(modelName, id, snapshot, requestType, query){
     let memberId =this.get('session').session.content.authenticated.userdata.id;
//  console.log(memberId,"hgfchgdasghsagh")
        return `http://${ENV.activityServerHost}/api/v1/teams/${memberId}`;
    },
createRecord(store, type, snapshot) {
        let memberId =this.get('session').session.content.authenticated.userdata.id;
        let  newdata = this.serialize(snapshot)

    return new Promise((resolve) => {
        Em.$.ajax({
            async: true,
            crossDomain: true,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(newdata),
            url:`http://${ENV.activityServerHost}/api/v1/team/${memberId}`,
            success: {
                200: ()=>{
                    Em.run(null, resolve);
                }
            }
        })
    })
   },

    deleteRecord(store, type, snapshot){
  
        let data = this.serialize(snapshot);
   
          return new Promise(function (resolve, reject)  {
       
              Em.$.ajax({
                async: true,
                crossDomain: true,
                 type: 'DELETE',
                 contentType: "application/json",
                 data: JSON.stringify(data),
                 url: `http://${ENV.activityServerHost}/api/v1/teams/${snapshot.id}`,
                 success: {
                    200: ()=>{
                        Em.run(null, resolve);
                    }
                 }
              })
          })
    }
});
