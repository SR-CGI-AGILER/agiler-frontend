import DS from 'ember-data';
import {inject as service} from '@ember/service';

import Em from 'ember';


export default DS.RESTAdapter.extend({
	//making a server call to projects
	session: service('session'),
    buildURL(modelName, id, snapshot, requestType, query){
        // debugger
        if (query) {
            console.log(query.assignTo,"gggg")
            debugger
            return  `http://localhost:8000/api/v1/teams/${query.assignTo.teamId}/projects`;
        }else {
            let memberId =this.get('session').session.content.authenticated.userdata.id;
            console.log(memberId,"hgfchgdasghsagh")
            return `http://localhost:8000/api/v1/member/${memberId}/projects/`;
        }
        // debugger
    },
    urlForQuery (query, modelName) {
        // switch(modelName) {
            // case 'repo' :
            // debugger
            return  `http://172.23.238.195:8000/api/v1/teams/${query.assignTo}/projects`;
            // default:
            // return this._super(...arguments);
        // }
    },
	createRecord(store, type, snapshot) {
        debugger
        let  newdata = this.serialize(snapshot)
        console.log(newdata)
        // console.log(newdata);
        console.log(newdata.assignTo[0].teamId,"kjbsdckbjdsc");
      return new Promise((resolve) => {
        Em.$.ajax({
            async: true,
            crossDomain: true,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(newdata),
            url:`http://localhost:8000/api/v1/project/${newdata.assignTo[0].teamId}`,
            success: {
                200: ()=>{
                    Em.run(null, resolve);
                }
            }
        })
    })
    }

})
