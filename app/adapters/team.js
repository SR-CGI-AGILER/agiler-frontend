import DS from 'ember-data';
import {inject as service} from '@ember/service';
export default DS.RESTAdapter.extend({
    session: service('session'),

    buildURL(modelName, id, snapshot, requestType, query){
     let memberId =this.get('session').session.content.authenticated.userdata.id;
 console.log(memberId,"hgfchgdasghsagh")
        return `http://localhost:8000/api/v1/teams/${memberId}`;
    }
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
});
