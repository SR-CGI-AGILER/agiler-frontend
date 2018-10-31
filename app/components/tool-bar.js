import Component from '@ember/component';

export default Component.extend({
    actions: {
        getRoom() {
            this.get('discuss')();
        }
    }

});
