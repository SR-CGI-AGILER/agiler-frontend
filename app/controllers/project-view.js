import Controller from '@ember/controller';

import Ember from 'ember'
export default Controller.extend({
    queryParams: ['modelName'],
    // modelName: null
    store: Ember.inject.service(),

    projectDetails: [],
    // deleteTask(x){
    //     this.store.findRecord('task', x.id).then(data => {
    //         data.set('archiveTask',true)
    //         data.save();
    //     })
    // }
});
