import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from "@ngrx/store";
import { CustomerPayload } from 'src/app/shared/models';


const loadCustomers = createAction('[Customers Effects] load customers');
const loadCustomersSuccess = createAction('[Customers Effects] load customers success', props<{ payload: CustomerPayload }>());
const loadCustomersFailure = createAction('[Customers Effects] load customers error', props<{ error: HttpErrorResponse }>());

export const customersEffectsActions = {
  loadCustomers,
  loadCustomersSuccess,
  loadCustomersFailure
}

const paginateCustomers = createAction('[Customers Page] paginate customers table', props<{ pageIndex: number, pageSize: number }>());

export const customersPageActions = {
  paginateCustomers
}
