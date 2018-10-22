import DS from 'ember-data';
// import Em from 'ember';

export default DS.RESTAdapter.extend({
  buildURL(){

    return `http://localhost:3000/api/v1/chat-room/raaptor/messages`
  },

  createRecord(store, type, snapshot) {
    let data = this.serialize(snapshot);

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