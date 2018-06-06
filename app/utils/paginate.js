import $ from 'jquery';
import ENV from 'data-fetcher/config/environment';

const p = ENV.pagination;

export default function paginate(query, {pageSize, page} = {pageSize: p.defaultPerPage, page: p.defaultPage}) {
  const paginationFilter = {};
  paginationFilter[p.pageSizeAttributeName] = pageSize;
  paginationFilter[p.pageAttributeName] = page;
  return $.extend({}, paginationFilter, query);
}
