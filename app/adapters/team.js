import DS from 'ember-data';
import ENV from 'agiler-frontend/config/environment';
import {inject as service} from '@ember/service';
    


export default DS.RESTAdapter.extend({
    session: service('session'),
    // buildURL() {
    //     return `http://${ENV.activityServerHost}/api/v1/team/deddd8d2-e041-4fbb-a8ed-3c079af9930d`
    // },
    buildURL(modelName, id, snapshot, requestType, query){
     let memberId =this.get('session').session.content.authenticated.userdata.id;
//  console.log(memberId,"hgfchgdasghsagh")
        return `http://${ENV.activityServerHost}/api/v1/teams/${memberId}`;
    },
//     createRecord(store, type, snapshot) {
//         let data = this.serialize(snapshot);

//         return new Promise((resolve) => {
//             Em.$.ajax({
//                 async: true,
//                 crossDomain: true,
//                 type: 'POST',
//                 contentType: 'application/json',
//                 data: JSON.stringify(data),data
//                 url: `http://localhost:8000/api/v1/project`,
//                 success: {
//                     200: ()=>{
//                         Em.run(null, resolve);
//                     }
//                 }
//             })
//         })
//     },

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
