import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    buildURL(modelName, id, snapshot, requestType, query){
      
    let projectId = query.projectId;
    return `http://localhost:8000/api/v1/projects/${projectId}/tasks/`;
    } ,

    createRecord(store, type, snapshot){
        // debugger
        // console.log(snapshot);
        debugger
        let  newdata = this.serialize(snapshot)
        console.log(newdata)
        console.log(newdata.taskName);
        console.log(newdata.projectId,"kjbsdckbjdsc");
    return new Promise((resolve) => {
        console.log(JSON.stringify(snapshot._attributes.taskName));
        Em.$.ajax({
            async: true,
            crossDomain: true,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(newdata),
            url:`http://localhost:8000/api/v1/project/${newdata.projectId}/task`,
            success: {
                200: ()=>{
                    Em.run(null, resolve);
                }
            }
        })
    })
}
    
});
