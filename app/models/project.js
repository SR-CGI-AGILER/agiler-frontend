import DS from 'ember-data';

 const { attr } = DS;

export default DS.Model.extend({
    projectName : attr('string'),
    createdAt : attr('string'),
    createdBy : attr('date'),
    dueDate : attr('date'),
    assignTo : attr(),
    archiveProject : attr('boolean'),
    duringStandUp : attr('boolean'),

});
