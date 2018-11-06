import DS from 'ember-data';
import ENV from 'agiler-frontend/config/environment';
import {inject as service} from '@ember/service';

import Em from 'ember';


export default DS.RESTAdapter.extend({

	session: service('session'),
    buildURL(modelName, id, snapshot, requestType, query){
        if (query) {
            
            return  `http://${ENV.activityServerHost}/api/v1/teams/${query.assignTo.teamId}/projects`;
        }else {
            let memberId =this.get('session').session.content.authenticated.userdata.id;

            return `http://${ENV.activityServerHost}/api/v1/member/${memberId}/projects/`;
        }
       
    },
 
	createRecord(store, type, snapshot) {

        let  newdata = this.serialize(snapshot)

      return new Promise((resolve, reject) => {
        Em.$.ajax({
            async: true,
            crossDomain: true,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(newdata),
            url:`http://${ENV.activityServerHost}/api/v1/project/${newdata.assignTo[0].teamId}`,
            success: resolve,
            error: reject
        })
    })
    },
    updateRecord(store, type, snapshot) {

        let data = this.serialize(snapshot);

        return new Promise((resolve) => {
            Em.$.ajax({
                async: true,
                crossDomain: true,
                type: 'PATCH',
                contentType: 'application/json',
                data: JSON.stringify(data.assignTo),
                url: `http://${ENV.activityServerHost}/api/v1/project/${snapshot.id}/assignTo`,
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
                 type: "DELETE",
                 contentType: "application/json",
                 data: JSON.stringify(data),
                 url: `http://${ENV.activityServerHost}/api/v1/project/${snapshot.id}`,
                 success: {
                    200: ()=>{
                        Em.run(null, resolve);
                    }
                 }
              })
          })
    }
})