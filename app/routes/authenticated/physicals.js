import Route from '@ember/routing/route';
import { snakeCase, uniq } from 'lodash';
import paginate from 'data-fetcher/utils/paginate';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';

export default Route.extend({
  ipsInfo: service(),

  model() {
    return this.get('store').query('user', paginate());
  },

  _buildFilterQueryParams(filterObject) {
    const params = [],
          staticFilters = [
            'login',
            'fullName',
            'actualAddress',
            'mobilePhone',
            'email',
            'accountId',
            'dmac',
            'dip'
    ];
    for(let attribute of staticFilters) {
      if (filterObject[attribute]) {
        const urlAttribute = snakeCase(attribute);
        const value = filterObject[attribute];
        params.push(`["like", "${urlAttribute}", "${value}"]`);
      }
    }
    return params;
  },

  _buildVirtualFilterQueryParams(accountsInfo) {
    let accounts = accountsInfo.map((item) => item.account);
    accounts = uniq(accounts);
    let accountsQuery = accounts.join(`","`);
    return `["in", "account_id", ["${accountsQuery}"]]`;
  },

  async _loadIpAccounts(ip) {
    return this.get('ipsInfo').getAccounts(ip);
  },

  async _loadAccountIps(account) {
    return this.get('ipsInfo').getIps(account);
  },

  actions: {
    async filterModel(filterObject, pagination) {
      const controller = this.get('controller'),
            queryParams = this._buildFilterQueryParams(filterObject),
            staticIp = get(filterObject, 'sip')
      ;
      if (staticIp) {
        let accountsInfo = await this._loadIpAccounts(staticIp);
        controller.set('staticIp', {accounts: accountsInfo, ip: staticIp});
        queryParams.push(this._buildVirtualFilterQueryParams(accountsInfo));
      }
      return this.get('store').query('user', paginate({filter: queryParams}, pagination)).then((filteredData) => {
        controller.set('model', filteredData);
      });
    },

    async loadUserIps(user) {
      const controller = this.get('controller'),
            account = get(user, 'account')
      ;
      controller.set('isUserLoading', true);
      const userIps = await this._loadAccountIps(account);
      set(user, 'ips', userIps);
      controller.set('isUserLoading', false);
    }
  }
});
