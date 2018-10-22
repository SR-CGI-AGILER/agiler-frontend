import Controller from '@ember/controller';

export default Controller.extend({

    queryParams: ['room'],

    actions: {
        sendButtonPressed(name){
            this.store.createRecord('message', {
                roomname:"raaptor",
                messages:this.get('var'),
                createdBy: "Atreya",
                createdAt:name
                
            }).save();
            this.set('var',"");
        }
    }
})
