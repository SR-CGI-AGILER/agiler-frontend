import DS from 'ember-data';
import { strictEqual } from 'assert';

const {attr} = DS;
export default DS.Model.extend({
    taskId :attr('string'),
    subTaskName : attr('string'),
    createdAt : attr('date'),
    createdBy : attr('string'),
    dueDate : attr('date'),
    assignedTo : attr(),
    status : attr('string'),
    archiveSubTask : attr('boolean'),
    duringStandUp : attr('boolean')

});
