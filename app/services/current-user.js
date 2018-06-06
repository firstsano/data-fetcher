import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Service.extend({
  session: service(),
  auth: alias('session.data.authenticated'),
  isAuthenticated: alias('session.isAuthenticated'),
  name: alias('auth.user_name'),
  email: alias('auth.user_email'),
  token: alias('auth.user_token')
});
