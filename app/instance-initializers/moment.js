import ENV from 'data-fetcher/config/environment';

export function initialize() {
  window.moment.defaultFormat = ENV.moment.defaultFormat;
}

export default {
  initialize
};
