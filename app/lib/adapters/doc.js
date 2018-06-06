import ActiveModelAdapter from 'active-model-adapter';
import ENV from 'data-fetcher/config/environment';
import { inject as service } from '@ember/service';
import { get, computed } from '@ember/object';

export default ActiveModelAdapter.extend({
  currentUser: service(),
  host: ENV.api.juridicals,

  headers: computed(function() {
    return { 'Accept': 'application/json' };
  }),

  handleResponse() {
    const output = {},
          modelName = this.get('payloadModelName');
    output[modelName] = this._super(...arguments);
    return output;
  },

  buildURL() {
    const builtUrl = this._super(...arguments),
          urlResourceExp = this.get('urlResourceExp'),
          urlModelExp = this.get('urlModelExp');
    return builtUrl.replace(urlModelExp, urlResourceExp);
  },

  query(store, type, query) {
    query.auth_token = get(this, 'currentUser.token');
    return this._super(...arguments);
  }
});
