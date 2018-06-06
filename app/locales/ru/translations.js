import $ from 'jquery';
import componentsTranslations from './components/components';
import appTranslations from './app';
import login from './login';
import physicals from './physicals';
import juridicals from './juridicals';
import telephony from './telephony';

let translations = $.extend(
  {},
  login,
  physicals,
  juridicals,
  componentsTranslations,
  appTranslations,
  telephony
);

export default translations;
