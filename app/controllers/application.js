import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  currentUser: service(),

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    },

    moveToLogin() {
      this.transitionToRoute('login');
    }
  }
});
