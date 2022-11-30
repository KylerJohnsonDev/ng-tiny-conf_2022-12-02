import { createFeatureSelector, createSelector } from "@ngrx/store";
import { customersAdapter, CustomersState, CUSTOMERS_FEATURE_KEY } from "./customers.reducer";

const selectCustomersFeature = createFeatureSelector<CustomersState>(CUSTOMERS_FEATURE_KEY);

const selectLimit = createSelector(
  selectCustomersFeature,
  (state) => state.limit
)

const selectOffset = createSelector(
  selectCustomersFeature,
  (state) => state.offset
)

const selectError = createSelector(
  selectCustomersFeature,
  (state) => state.error
)

const { selectAll } = customersAdapter.getSelectors(selectCustomersFeature);

const selectPaginationInfo = createSelector(
  selectLimit,
  selectOffset,
  (limit, offset) => ({ limit, offset })
)

export const customersSelectors = {
  selectError,
  selectLimit,
  selectOffset,
  selectPaginationInfo,
  selectCustomers: selectAll
}
