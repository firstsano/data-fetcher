// Index file for components' translations
import $ from 'jquery';
import mainMenu from './main-menu';
import table from './table';

let translations = $.extend({},
  mainMenu,
  table
);

export default {'components': translations};
