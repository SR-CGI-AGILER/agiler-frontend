import Controller from '@ember/controller';

export default Controller.extend({
    data: null,
    
    actions: {
        transitionToProjectView(project){
            console.log(project.get("id"), "askldjlaksjdlkajslkdja");
            this.transitionToRoute('project-view', project.get('id') , {queryParams: {  modelName: project.constructor.modelName}});
        }
    }
});
