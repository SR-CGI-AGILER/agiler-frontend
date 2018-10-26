import Controller from '@ember/controller';
import ENV from 'agiler-frontend/config/environment';
import {
  inject as service
} from '@ember/service';

export default Controller.extend({
  queryParams: ['roomId'],
  session: service('session'),

  updated: Ember.computed('model', function () {
    let date = new Date();
    return date;
  }),

  actions: {
    sendButtonPressed(date){

      let data = this.get('session').session.content.authenticated.userData;
      let newMessage = {
          roomname: this.get('param').room ,
          messages: this.get('var'),
          createdBy: data.name,
          createdAt: date
          
      }
      this.store.createRecord('message', newMessage).save();
      this.set('var',"");

      // Ember.run.later(this, function() {
      //     this.reload();
      //     console.log('reloading');
      // }, 5000);
      
      this.get('model').pushObject(newMessage)
        
  },

    //   }).save();
    //   this.set('var', "");
    // },

    addUsers() {
      // console.log(this.get('teams'), "Iam inside the discuss controller")
      this.set('members', [])
      this.get('teams').map(eachTeam => {
        // console.log(eachTeam)
        eachTeam.teamMembers.map(eachMember => {

          this.get('members').push(eachMember)            
        })
      })

      // console.log(this.get('members'), "I should be the members array")
      this.toggleProperty('showDialog');
      
      // this.set('showuser', this.store.findAll('users'));
      // console.log(this.get('showuser'))
    },

    closeDialog() {
      this.toggleProperty('showDialog')
    },

    search_user(user) {
      console.log(user)

    },
    
    add(userid) {
       let roomname = this.get('param').room
        let roomid = this.get('roomId')
        this.store.findRecord('room',roomid).then(function(data){
          // console.log(data.members,"I am data")
          if (data.members.includes(userid) === false)
          data.members.push(userid)
        });
        return new Promise((resolve) => { 
          Ember.$.ajax({
            type: "PUT",
            url: `http://${ENV.collaborationServerHost}/api/v1/chat-room/invite/${roomname}/user/${userid}`,
            data: {}
            });
        }) 
     
    }
  }
});
