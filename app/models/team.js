import DS from 'ember-data';

export default DS.Model.extend({
    teamName: DS.attr('string'),
    teamMembers: DS.attr(),
    createdBy: DS.attr('string'),
    projects: DS.attr(),
    projectName: DS.attr('string')
});
