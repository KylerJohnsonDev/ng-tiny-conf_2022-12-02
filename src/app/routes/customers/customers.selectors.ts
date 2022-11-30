import { createSelector } from "@ngrx/store";
import { Customer } from "src/app/shared/models";
import { customersSelectors } from "./customers-feature-state/customers.selectors";

export interface CustomersViewModel {
  customers: Customer[],
  limit: number,
  offset: number,
  error: null | string
}

export const selectVM = createSelector(
  customersSelectors.selectCustomers,
  customersSelectors.selectLimit,
  customersSelectors.selectOffset,
  customersSelectors.selectError,
  (customers, limit, offset, error) => {
    return {
      customers,
      limit,
      offset,
      error
    } as CustomersViewModel;
  }
)
