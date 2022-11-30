import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CustomersState, CUSTOMERS_FEATURE_KEY } from "./customers.reducer";

const selectCustomersFeature = createFeatureSelector<CustomersState>(CUSTOMERS_FEATURE_KEY);

const selectPaginationInfo = createSelector(
  selectCustomersFeature,
  (state) => ({ limit: state.limit, offset: state.offset })
)

export const customersSelectors = {
  selectPaginationInfo
}
