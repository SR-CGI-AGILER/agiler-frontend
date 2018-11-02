import DS from 'ember-data';
import ENV from 'agiler-frontend/config/environment';

export default DS.RESTAdapter.extend({
  buildURL() {
    return `http://${ENV.serverhost}/api/users`
  },


});
