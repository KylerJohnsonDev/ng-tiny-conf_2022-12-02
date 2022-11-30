import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Customer } from "src/app/shared/models";
import { customersEffectsActions } from "./customers.actions";

export const CUSTOMERS_FEATURE_KEY = 'Customers';

export interface CustomersState extends EntityState<Customer> {
  loading: boolean;
  error: string | null;
  limit: number;
  offset: number;
  pageNumber: number;
}

export const customersAdapter = createEntityAdapter<Customer>();

const initialState: CustomersState = customersAdapter.getInitialState({
  loading: false,
  error: null,
  limit: 10,
  offset: 0,
  pageNumber: 1
})

export const customersReducer = createReducer(
  initialState,

  on(customersEffectsActions.loadCustomers, (state) => ({ ...state, loading: true })),

  on(customersEffectsActions.loadCustomersSuccess, (state, { customers }) => {
    return customersAdapter.setMany(customers, {
      ...state,
      loading: false,
      error: null
    })
  }),

  on(customersEffectsActions.loadCustomersFailure, (state, { error }) => ({
    ...state,
    error: error.message,
    loading: false
  }))
)
