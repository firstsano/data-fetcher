import DocAdapter from 'data-fetcher/lib/adapters/doc';

export default DocAdapter.extend({
  payloadModelName: 'units',
  urlResourceExp: '/ip_stats',
  urlModelExp: /\/units/
});
