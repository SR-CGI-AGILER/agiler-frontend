import Controller from '@ember/controller';

import Ember from 'ember'
export default Controller.extend({
    queryParams: ['modelName'],
    // modelName: null
    store: Ember.inject.service(),

    projectDetails: [],
    actions :{
    deleteTask(x){
        console.log(x.id);
        this.store.findRecord('task', x.id, {reload:true}).then(data => {
            data.deleteRecord();
            data.save();
        })
    }
}
});
