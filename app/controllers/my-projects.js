import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        transitionToProjectView(x){
            this.transitionToRoute('project-view', x.get('id'), {queryParams: {modelName: x.constructor.modelName}});
        }
    }
});
