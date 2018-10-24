import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        transitionToProjectView(project){
            // this.transitionToRoute('project-view', project.get('id') , {queryParams: {  modelName: project.constructor.modelName}});
        },
            
            showPromptDialogAction(){
                this.toggleProperty('showPromptDialog');
            },
            closePromptDialog(){
                // console.log(this.getProperties('teamName'));
                this.toggleProperty('showPromptDialog');
            },
            cancel() {

            },
            ok(){}
        }
});
