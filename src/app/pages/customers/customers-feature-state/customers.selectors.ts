import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  customersAdapter,
  CustomersState,
  CUSTOMERS_FEATURE_KEY,
} from './customers.reducer';

const selectCustomersFeature = createFeatureSelector<CustomersState>(
  CUSTOMERS_FEATURE_KEY
);

const selectLimit = createSelector(
  selectCustomersFeature,
  (state) => state.limit
);

const selectOffset = createSelector(
  selectCustomersFeature,
  (state) => state.offset
);

const selectPageIndex = createSelector(
  selectCustomersFeature,
  (state) => state.pageIndex
);

const selectTotalCount = createSelector(
  selectCustomersFeature,
  (state) => state.totalCount
);

const selectLoading = createSelector(
  selectCustomersFeature,
  (state) => state.loading
);

const selectError = createSelector(
  selectCustomersFeature,
  (state) => state.error
);

const { selectAll } = customersAdapter.getSelectors(selectCustomersFeature);

const selectPaginationInfo = createSelector(
  selectLimit,
  selectOffset,
  (limit, offset) => ({ limit, offset })
);

const selectState = createSelector(
  selectCustomersFeature,
  selectAll,
  (state, customers) => {
    const { loading, limit, offset, error, totalCount, pageIndex } = state;
    return {
      customers,
      loading,
      limit,
      offset,
      error,
      totalCount,
      pageIndex,
    };
  }
);

export const customersSelectors = {
  selectState,
  selectError,
  selectLimit,
  selectOffset,
  selectLoading,
  selectPageIndex,
  selectTotalCount,
  selectPaginationInfo,
  selectCustomers: selectAll,
};
