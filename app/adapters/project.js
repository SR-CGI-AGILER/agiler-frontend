import DS from 'ember-data';
import ENV from 'agiler-frontend/config/environment';
import {inject as service} from '@ember/service';

import Em from 'ember';


export default DS.RESTAdapter.extend({

	session: service('session'),
    buildURL(modelName, id, snapshot, requestType, query){
        // debugger
        if (query) {
            // console.log(query.assignTo,"gggg")
            // debugger
            return  `http://${ENV.activityServerHost}/api/v1/teams/${query.assignTo.teamId}/projects`;
        }else {
            let memberId =this.get('session').session.content.authenticated.userdata.id;
            console.log(memberId,"hgfchgdasghsagh")
            return `http://${ENV.activityServerHost}/api/v1/member/${memberId}/projects/`;
        }
        // debugger
    },
 
	createRecord(store, type, snapshot) {
        let  newdata = this.serialize(snapshot)
        // debugger
        // console.log(newdata)
        // console.log(newdata);
        // console.log(newdata.assignTo[0].teamId,"kjbsdckbjdsc");
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
          

    deleteRecord(store, type, snapshot){
   
        let data = this.serialize(snapshot);
      
          return new Promise(function (resolve, reject)  {

              Em.$.ajax({
                async: true,
                crossDomain: true,
                 type: 'DELETE',
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