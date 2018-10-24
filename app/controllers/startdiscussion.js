import Controller from '@ember/controller';

export default Controller.extend({
    // queryParams: ['room'],
    actions: {
        goToDiscussion(name){
            console.log(name, "form the start dissus control")
            this.store.createRecord('room', { roomName:name }).save()
            // this.transitionToRoute('discuss')
        },
        goToRoom(room){
            console.log(room)
            this.transitionToRoute(`discuss`, room)
        }
    }
});
