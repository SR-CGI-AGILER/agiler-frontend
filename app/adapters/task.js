import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    buildURL(modelName, id, snapshot, requestType, query){
      
    let projectId = query.projectId;
    console.log(projectId,"specific tasks")
    return `http://localhost:8000/api/v1/projects/${projectId}/tasks/`;
    },

    deleteRecord(store, type, snapshot){
     
        let data = this.serialize(snapshot);
        //console.log(snapshot.modelName);
            console.log(data,"jdavbhd")
          return new Promise(function (resolve, reject)  {
             debugger
              Em.$.ajax({
                async: true,
                crossDomain: true,
                 type: 'DELETE',
                 contentType: "application/json",
                 data: JSON.stringify(data),
                 url: `http://localhost:8000/api/v1/tasks/${snapshot.id}`,
                 success: {
                    200: ()=>{
                        Em.run(null, resolve);
                    }
                 }
              })
          })
    }
});
