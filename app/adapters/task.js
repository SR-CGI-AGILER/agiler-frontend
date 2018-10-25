import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    buildURL(modelName, id, snapshot, requestType, query){
      
    let projectId = query.projectId;
    console.log(projectId,"specific tasks")
    return `http://localhost:8000/api/v1/projects/${projectId}/tasks/`;
    } 
});
