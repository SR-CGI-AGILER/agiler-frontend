import DS from 'ember-data';
// import Em from 'ember';

export default DS.RESTAdapter.extend({
  buildURL(){

    return `http://localhost:3000/api/v1/chat-room/raaptor/messages`
  },

  
});