import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  buildURL() {
    return `http://172.23.238.243:4000/api/users`
  }
});
