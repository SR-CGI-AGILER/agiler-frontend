import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        addUsers() {
            this.toggleProperty('showDialog')
        },
        closeDialog(){
            this.toggleProperty('showDialog')
        }
    }
});
