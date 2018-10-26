import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    buildURL(modelName, id, snapshot, requestType, query) {
        return `http://localhost:3000/api/v1/chat-room/${query.roomName}/messages`
    },
    
    urlForQuery(query, modelName){
        
        return `http://localhost:3000/api/v1/chat-room/${query.roomName}/messages`
    },
    
    createRecord(store, type, snapshot) {
    let data = this.serialize(snapshot, {includeId: true});
    console.log(data)

    return new Promise((resolve) => {
        Em.$.ajax({
            type: 'POST',           
            data: data,
            url: `http://localhost:3000/api/v1/chat-room/${data.roomname}/messages`,
            success: {
                200: ()=>{
                    Em.run(null, resolve);
                }
            }
        })
    })
}

  
});