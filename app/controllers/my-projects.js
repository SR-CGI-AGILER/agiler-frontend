import Controller from '@ember/controller';

export default Controller.extend({
    data: null,
    init(){
        console.log("adasjdhakjsdh")
        this.data = this.store.findAll('project')
        console.log(this.data)
    },
    actions: {
        transitionToProjectView(project){
            console.log(project.get("id"), "askldjlaksjdlkajslkdja");
            this.transitionToRoute('project-view', project.get('id') , {queryParams: {  modelName: project.constructor.modelName}});
        }
    }
});
