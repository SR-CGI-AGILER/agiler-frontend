import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
    taskId: attr('string'),
    subTaskName: attr('string'),
    createdAt: attr('date'),
    dueDate: attr('date'),
    assignedTo: attr(),
    status: attr('string'),
    archiveSubTask: attr('boolean'),
    duringStandUp: attr('boolean')
});
