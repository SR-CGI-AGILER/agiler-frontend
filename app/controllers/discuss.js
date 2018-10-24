import Controller from '@ember/controller';
import Ember from 'ember';
const {
  getOwner
} = Ember;

export default Controller.extend({
    
    actions: {
        sendButtonPressed(name){

            // console.log(this.get('model'), this.get('param'))
            
            this.store.createRecord('message', {
                roomname: this.get('param').room ,
                messages: this.get('var'),
                createdBy: "Atreya",
                createdAt: name
                
            }).save();
            this.set('var',"");

            this.get('model').pushObject({
                roomname: this.get('param').room ,
                messages: this.get('var'),
                createdBy: "Atreya"
                
                
            })
        },

        addUsers() {
            this.toggleProperty('showDialog')
        },

        closeDialog(){
            this.toggleProperty('showDialog')
        }
    }
});

