import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from "@ngrx/store";
import { Customer } from 'src/app/shared/models';


const loadCustomers = createAction('[Customers Effects] load customers');
const loadCustomersSuccess = createAction('[Customers Effects] load customers success', props<{ customers: Customer[] }>());
const loadCustomersFailure = createAction('[Customers Effects] load customers error', props<{ error: HttpErrorResponse }>())

export const customersEffectsActions = {
  loadCustomers,
  loadCustomersSuccess,
  loadCustomersFailure
}
