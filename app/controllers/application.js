import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        getRoom(){
            this.transitionToRoute('startdiscussion');
        }
    }
});
