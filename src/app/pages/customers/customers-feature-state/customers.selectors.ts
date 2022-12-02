import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  customersAdapter,
  customersFeature,
  CustomersState,
} from './customers.reducer';

const {
  selectCustomersState,
  selectLimit,
  selectOffset,
  selectPageIndex,
  selectTotalCount,
  selectLoading,
  selectError,
} = customersFeature;

const { selectAll } = customersAdapter.getSelectors(selectCustomersState);

const selectPaginationInfo = createSelector(
  selectLimit,
  selectOffset,
  (limit, offset) => ({ limit, offset })
);

const selectState = createSelector(
  selectCustomersState,
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
