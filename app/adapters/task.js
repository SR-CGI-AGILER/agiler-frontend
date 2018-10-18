import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    buildURL(modelName, id, snapshot, requestType, query){

		return `http://localhost:8000/api/v1/projects/5bc5c8395ddc846941ed2f78/tasks/:limit?/:page?`;
    } 
});
