import CustomRouter from 'data-fetcher/lib/router';

const Router = CustomRouter.extend();
Router.map(function() {
  this.route('login');
  this.route('authenticated', { path: 'auth' }, function() {
    this.route('physicals');
    this.route('static-physicals');
    this.route('juridicals');
    this.route('telephony-users');
  });
  this.route('page-not-found', { path: '/*wildcard' });
});

export default Router;
