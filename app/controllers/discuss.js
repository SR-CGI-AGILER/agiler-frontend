import Controller from '@ember/controller';

import {inject as service} from '@ember/service';

export default Controller.extend({

    session:service('session'),

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
            this.get('model').pushObject(newMessage)
              
        },

        addUsers() {
            this.toggleProperty('showDialog')
        },

        closeDialog(){
            this.toggleProperty('showDialog')
        }
    }
});

