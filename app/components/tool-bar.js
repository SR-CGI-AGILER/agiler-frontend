import Component from '@ember/component';

export default Component.extend({
    actions: {
        getRoom() {
             console.log("here is the compon")
            this.get('discuss')();
        }
    }
});
