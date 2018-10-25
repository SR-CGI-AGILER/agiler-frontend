import DS from 'ember-data';

import { inject as service } from '@ember/service';

export default DS.RESTAdapter.extend({
    session: service('session'),
    buildURL(modelName, id, snapshot, requestType, query){
        if (query) {
            // console.log(query.assignTo,"gggg")
            return  `http://localhost:8000/api/v1/teams/${query.assignTo.teamId}/projects`;
        }else {
            
           
            // return `http://localhost:8000/api/v1/member/345/projects/`;
            console.log("bjccbjd");
            let memberId = this.get('session').session.content.authenticated.userdata.id;
                console.log(memberId,"aaaadsdnj")
                return `http://localhost:8000/api/v1/member/${memberId}/projects/`;
            
        }
      
    }
})
    // urlForQuery (query, modelName) {
    //     // switch(modelName) {
    //         // case 'repo' :
    //         debugger
    //         return  `http://172.23.238.195:8000/api/v1/teams/${query.assignTo}/projects`;
    //         // default:
    //         // return this._super(...arguments);
    //     // }
    // }
	
	// findRecord(store, type, snapshot) {
    //     let data = this.serialize(snapshot);

    // session: service('session'),

	// buildURL(modelName, id, snapshot, requestType, query){
    //     let memberId = this.get('session').session.content.authenticated.userdata.id;
    //     console.log(memberId,"aaaadsdnj")
    //     return `http://localhost:8000/api/v1/member/${memberId}/projects/`;
    // }

