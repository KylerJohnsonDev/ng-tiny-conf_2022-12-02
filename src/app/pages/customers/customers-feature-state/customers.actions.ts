import { HttpErrorResponse } from '@angular/common/http';
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CustomerPayload } from 'src/app/shared/models';

export const customersEffectsActions = createActionGroup({
  source: 'Customers Effects',
  events: {
    'load customers': emptyProps(),
    'load customers success': props<{ payload: CustomerPayload }>(),
    'load customers Failure': props<{ error: HttpErrorResponse }>(),
  },
});

export const customersPageActions = createActionGroup({
  source: 'Customers Page',
  events: {
    'paginate customers': props<{ pageIndex: number; pageSize: number }>(),
  },
});
