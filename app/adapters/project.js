import DS from 'ember-data';
import {inject as service} from '@ember/service';

import Em from 'ember';


export default DS.RESTAdapter.extend({
	//making a server call to projects
	session: service('session'),
    buildURL(modelName, id, snapshot, requestType, query){
        if (query) {
            console.log(query.assignTo,"gggg")
            return  `http://172.23.238.195:8000/api/v1/teams/${query.assignTo.teamId}/projects`;
        }else {
            let memberId =this.get('session').session.content.authenticated.userdata.id;
            console.log(memberId,"hgfchgdasghsagh")
            return `http://172.23.238.195:8000/api/v1/member/${memberId}/projects/`;
        }
        debugger
    },
    urlForQuery (query, modelName) {
        // switch(modelName) {
            // case 'repo' :
            debugger
            return  `http://172.23.238.195:8000/api/v1/teams/${query.assignTo}/projects`;
            // default:
            // return this._super(...arguments);
        // }
    }
	
	// findRecord(store, type, snapshot) {
    //     let data = this.serialize(snapshot);

    //     return new Promise((resolve) => {
    //         Em.$.ajax({
    //             async: true,
    //             crossDomain: true,
    //             type: 'GET',
    //             contentType: 'application/json',
    //             data: JSON.stringify(data),
    //             url: `http://172.23.238.243:4000/api/teams/team1`,
    //             success: {
    //                 200: ()=>{
    //                     Em.run(null, resolve);
    //                 }
    //             }
    //         })
    //     })
    // }

})
