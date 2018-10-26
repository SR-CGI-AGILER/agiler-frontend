import DS from 'ember-data';
import ENV from 'agiler-frontend/config/environment';
export default DS.RESTAdapter.extend({

    urlForQuery(query, modelName){
        
        return `http://${ENV.collaborationServerHost}/api/v1/chat-room/${query.roomName}/messages`
    },
    
    createRecord(store, type, snapshot) {
    let data = this.serialize(snapshot);
    // console.log(data)

    return new Promise((resolve) => {
        Em.$.ajax({
            type: 'POST',           
            data: data,
            url: `http://${ENV.collaborationServerHost}/api/v1/chat-room/${data.roomname}/messages`,
            success: {
                200: ()=>{
                    Em.run(null, resolve);
                }
            }
        })
    })
}

  
});