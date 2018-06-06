import $ from 'jquery';
import AjaxService from 'ember-ajax/services/ajax';
import ENV from 'data-fetcher/config/environment';

export default AjaxService.extend({
  _cachedData: null,

  host: ENV.api.physicalsAdditional,

  defaultOptions: null,

  init() {
    this._super(...arguments);

    this.set('_cachedData', {
      ips: {},
      accounts: {}
    });

    this.set('defaultOptions', {
      dataType: 'text'
    });
  },

  _request(url = '/', options = {}) {
    const defaults = this.get('defaultOptions');
    const requestOptions = $.extend({}, defaults, options);
    return this.request(url, requestOptions)
      .then((response) => { return this._parseResponse(response); });
  },

  /**
   * Need to hack response, because of bad API.
   * Specifically, it responses with a text, and
   * it doesn't care for any headers and request
   * types.
   * @param response
   * @returns {*}
   * @private
   */
  _parseResponse(response) {
    let output;
    try {
      output = JSON.parse(response);
    } catch (e) {
      output = [];
    }
    return output;
  },

  getIps(account) {
    const url = `/account/${account}/ips`;
    return this._request(url);
  },

  getAccounts(ip) {
    const url = `/ip/${ip}/accounts`;
    return this._request(url);
  }
});
