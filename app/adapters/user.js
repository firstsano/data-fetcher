import BaseAdapter from 'data-fetcher/lib/adapters/volgaspot';

export default BaseAdapter.extend({
  payloadRoot: 'users',

  handleResponse() {
    const payload = this._super(...arguments);
    const includedDevices = [];
    for(let user of payload.users) {
      if (user.device) {
        user.device.type = 'devices';
        includedDevices.push(user.device);
      }
    }
    payload.devices = includedDevices;
    return payload;
  },

  buildURL() {
    const builtUrl = this._super(...arguments);
    return builtUrl.replace(/\/users/, "/expanded-users");
  },

  query(store, type, query) {
    query.expand = 'device';
    return this._super(...arguments);
  }
});
