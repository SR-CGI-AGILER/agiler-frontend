import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        sendButtonPressed(name){
            this.store.createRecord('message', {
                roomname:"raaptor",
                messages:this.get('var'),
                createdBy: "Ruchik",
                createdAt:name
                
            }).save()
        }
    }
})
