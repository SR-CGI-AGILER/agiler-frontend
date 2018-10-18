import DS from 'ember-data';
import Em from 'ember';


export default DS.RESTAdapter.extend({
	//making a server call to projects
	
	
	buildURL(modelName, id, snapshot, requestType, query){
		
		return `http://localhost:8000/api/v1/project`;
    }

})
