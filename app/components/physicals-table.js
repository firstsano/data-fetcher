import ServerModelsTable from 'ember-models-table/components/models-table-server-paginated';
import BaseTableMixin from 'data-fetcher/mixins/base-table';
import ENV from 'data-fetcher/config/environment';

const p = ENV.pagination;

export default ServerModelsTable.extend(BaseTableMixin, {
  metaPagesCountProperty: 'pageCount',
  metaItemsCountProperty: 'totalCount',

  useFilteringByColumns: false,
  showGlobalFilter: false,
  useNumericPagination: true,

  filterQueryParameters: null,

  init() {
    this._super(...arguments);
    this.set('filterQueryParameters', {
      globalFilter: 'search',
      sort: 'sort',
      sortDirection: 'sortDirection',
      page: p.pageAttributeName,
      pageSize: p.pageSizeAttributeName
    });
  }
});
