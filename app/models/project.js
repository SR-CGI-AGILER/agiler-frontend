import DS from 'ember-data';


 const {attr} = DS;
export default DS.Model.extend({
    projectName : attr('string'),
    createdAt : attr('date'),
    createdBy : attr('string'),
    dueDate : attr('date'),
    assignedTo : attr(),
    archiveProject : attr('boolean'),
    duringStandUp : attr('boolean')

});
