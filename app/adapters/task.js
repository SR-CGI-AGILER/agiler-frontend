import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    buildURL(modelName, id, snapshot, requestType, query){
      // let data = this.serialize(snapshot);
      console.log(modelName);
      console.log(id);
      // console.log(id);
      // console.log(snapshot.id);
      // console.log(data);
		return `http://localhost:8000/api/v1/projects/5bc7800b6220380c92086f65/tasks/:limit?/:page?`;
    } 
});
