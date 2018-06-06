import ModelsTable from 'ember-models-table/components/models-table';
import BaseTableMixin from 'data-fetcher/mixins/base-table';

export default ModelsTable.extend(BaseTableMixin, {
  useFilteringByColumns: false,
  showGlobalFilter: false,
  useNumericPagination: true,
});
