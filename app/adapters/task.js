import DS from 'ember-data';
import ENV from 'agiler-frontend/config/environment';

export default DS.RESTAdapter.extend({
    buildURL(modelName, id, snapshot, requestType, query){
      
    let projectId = query.projectId;
    return `http://${ENV.activityServerHost}/api/v1/projects/${projectId}/tasks/`;
    } ,

    createRecord(store, type, snapshot){
       
        let  newdata = this.serialize(snapshot)
        
    return new Promise((resolve,reject) => {
        
        Em.$.ajax({
            async: true,
            crossDomain: true,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(newdata),
            url:`http://${ENV.activityServerHost}/api/v1/project/${newdata.projectId}/task`,
            success: resolve,
            error: reject
            
        })
    })
},
updateRecord(store, type, snapshot){

    let data = this.serialize(snapshot);
    if(data.status ==="complete"){
        return new Promise(function( resolve, reject) {

            Em.$.ajax({
                async:true,
                crossDomain:true,
                type:'PATCH',
                contentType: "application/json",
                data: JSON.stringify(data),
                 url: `http://${ENV.activityServerHost}/api/v1/tasks/${snapshot.id}`,
                 success: resolve
                 
            })
        })
    }
    else {
        return new Promise(function( resolve, reject) {

            Em.$.ajax({
                async:true,
                crossDomain:true,
                type:'PATCH',
                contentType: "application/json",
                data: JSON.stringify(data),
                 url: `http://${ENV.activityServerHost}/api/v1/task/${snapshot.id}`,
                 success: resolve
                 
            })
        })
    }
},
    
    

    deleteRecord(store, type, snapshot){
     
        let data = this.serialize(snapshot);

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
