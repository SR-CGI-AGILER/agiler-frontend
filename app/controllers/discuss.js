import Controller from '@ember/controller';

import {inject as service} from '@ember/service';

import Ember from 'ember';
const {
  getOwner
} = Ember;

export default Controller.extend({

    session:service('session'),
    
    actions: {
        sendButtonPressed(name){

            let data = this.get('session').session.content.authenticated.userData;
            
            this.store.createRecord('message', {
                roomname: this.get('param').room ,
                messages: this.get('var'),
                createdBy: data.name,
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

