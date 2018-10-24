import Controller from '@ember/controller';

export default Controller.extend({
    // queryParams: ['room'],
    actions: {
        
        goToRoom(room){
            console.log(room)
            this.transitionToRoute(`discuss`, room)
        }
    }
});
