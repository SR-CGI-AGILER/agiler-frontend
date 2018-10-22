import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        goToDiscussion(name){
            console.log(name, "form the start dissus control")
            this.store.createRecord('room', { roomName:name }).save()
            this.transitionToRoute('discuss')
        },
        goToRoom(room){
            this.transitionToRoute(`/discuss/${room}`)
        }
    }
});
