import DS from 'ember-data';
import {inject as service} from '@ember/service';

import Em from 'ember';


export default DS.RESTAdapter.extend({
	//making a server call to projects
	session: service('session'),
    buildURL(modelName, id, snapshot, requestType, query){
        if (query) {
            console.log(query.assignTo,"gggg")
            return  `http://localhost:8000/api/v1/teams/${query.assignTo.teamId}/projects`;
        }else {
            let memberId =this.get('session').session.content.authenticated.userdata.id;
            console.log(memberId,"hgfchgdasghsagh")
            return `http://localhost:8000/api/v1/member/${memberId}/projects/`;
        }
    }
})