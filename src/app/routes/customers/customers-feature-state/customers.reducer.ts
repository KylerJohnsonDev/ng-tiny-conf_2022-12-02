import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Customer } from 'src/app/shared/models';
import {
  customersEffectsActions,
  customersPageActions,
} from './customers.actions';

export const CUSTOMERS_FEATURE_KEY = 'Customers';

export interface CustomersState extends EntityState<Customer> {
  loading: boolean;
  error: string | null;
  limit: number;
  offset: number;
  pageIndex: number;
  totalCount: number;
}

export const customersAdapter = createEntityAdapter<Customer>();

const initialState: CustomersState = customersAdapter.getInitialState({
  loading: false,
  error: null,
  limit: 5,
  offset: 0,
  pageIndex: 0,
  totalCount: 0,
});

export const customersReducer = createReducer(
  initialState,

  on(customersEffectsActions.loadCustomers, (state) => ({
    ...state,
    loading: true,
  })),

  on(customersEffectsActions.loadCustomersSuccess, (state, { payload }) => {
    return customersAdapter.setAll(payload.customer, {
      ...state,
      totalCount: payload.customer_aggregate.aggregate.count,
      loading: false,
      error: null,
    });
  }),

  on(customersEffectsActions.loadCustomersFailure, (state, { error }) => ({
    ...state,
    error: error.message,
    loading: false,
  })),

  on(
    customersPageActions.paginateCustomers,
    (state, { pageIndex, pageSize }) => {
      const offset = state.limit * pageIndex;
      return {
        ...state,
        loading: true,
        pageIndex,
        offset,
        limit: pageSize,
      };
    }
  )
);
