import DeviseAuthenticator from 'ember-simple-auth/authenticators/devise';
import { isEmpty } from '@ember/utils';
import ENV from 'data-fetcher/config/environment';

export default DeviseAuthenticator.extend({

  validationTokenAttributeName: 'user_token',

  validationIdentificationAttributeName: 'user_email',

  validationPermissionAttributeName: 'user_friendly',

  serverTokenEndpoint: `${ENV.api.authorize}/users/sign_in`,

  /**
   * Validates data from authentication response
   * @param {Object} data
   * @returns {boolean}
   * @private
   */
  _validate(data) {
    const tokenAttribute = this.get('validationTokenAttributeName'),
          emailAttribute = this.get('validationIdentificationAttributeName'),
          permissionAttribute = this.get('validationPermissionAttributeName'),
          resourceName = this.get('resourceName')
    ;
    const _data = data[resourceName] ? data[resourceName] : data;
    const attributesDefined = !isEmpty(_data[tokenAttribute]) && !isEmpty(_data[emailAttribute]) && !isEmpty(_data[permissionAttribute]);
    const permissionGranted = (_data[permissionAttribute] === true);
    return attributesDefined && permissionGranted;
  }
});
