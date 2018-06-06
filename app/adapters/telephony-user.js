import DocAdapter from 'data-fetcher/lib/adapters/doc';

export default DocAdapter.extend({
  payloadModelName: 'telephony_users',
  urlResourceExp: '/number_stats',
  urlModelExp: /\/telephony_users/
});
