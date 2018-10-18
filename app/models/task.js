import DS from 'ember-data';

const {attr} = DS;
export default DS.Model.extend({
    projectId :attr('string'),
    taskName : attr('string'),
    createdAt : attr('date'),
    createdBy : attr('string'),
    dueDate : attr('date'),
    assignedTo : attr(),
    status : attr('string'),
    archiveTask : attr('boolean'),
    duringStandUp : attr('boolean')

});
