import DS from 'ember-data';
const {attr} = DS

export default DS.Model.extend({

    roomname : attr('string'),
    messages : attr('string'),
    createdAt : attr('date'),
    createdBy : attr('string'),
    picture : attr('string')
});
