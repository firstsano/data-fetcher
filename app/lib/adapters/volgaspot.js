import $ from 'jquery';
import ActiveModelAdapter from 'active-model-adapter';
import ENV from 'data-fetcher/config/environment';

const currentPage = 'x-pagination-current-page',
  pageCount = 'x-pagination-page-count',
  perPage = 'x-pagination-per-page',
  totalCount = 'x-pagination-total-count';

export default ActiveModelAdapter.extend({
  payloadRoot: null,
  host: ENV.api.physicals,

  handleResponse(status, headers) {
    const payload = this._super(...arguments);
    const modelName = this.get('payloadRoot');
    const output = {};
    output[modelName] = payload;
    output.meta = $.extend({}, payload.meta, this._getPaginationFromHeaders(headers));
    delete(payload.meta);
    return output;
  },

  _getPaginationFromHeaders(headers) {
    return {
      currentPage: headers[currentPage],
      pageCount: headers[pageCount],
      perPage: headers[perPage],
      totalCount: headers[totalCount]
    };
  }
});
