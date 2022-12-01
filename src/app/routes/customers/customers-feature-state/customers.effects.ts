import { Injectable } from '@angular/core';
import {
  Actions,
  concatLatestFrom,
  createEffect,
  ofType,
  OnInitEffects,
} from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  customersEffectsActions,
  customersPageActions,
} from './customers.actions';
import { CustomersState } from './customers.reducer';
import { customersSelectors } from './customers.selectors';
import { CustomersService } from './customers.service';

@Injectable()
export class CustomersEffects implements OnInitEffects {
  ngrxOnInitEffects(): Action {
    return customersEffectsActions.loadCustomers();
  }

  loadCustomers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        customersEffectsActions.loadCustomers,
        customersPageActions.paginateCustomers
      ),
      concatLatestFrom(() =>
        this.store.select(customersSelectors.selectPaginationInfo)
      ),
      switchMap(([, paginationInfo]) =>
        this.customersService.loadCustomers(paginationInfo).pipe(
          map((payload) =>
            customersEffectsActions.loadCustomersSuccess({ payload })
          ),
          catchError((error) =>
            of(customersEffectsActions.loadCustomersFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store<CustomersState>,
    private customersService: CustomersService
  ) {}
}
