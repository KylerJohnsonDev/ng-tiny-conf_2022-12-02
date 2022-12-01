import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { CustomersEffects } from './customers-feature-state/customers.effects';
import { customersReducer, CustomersState, CUSTOMERS_FEATURE_KEY } from './customers-feature-state/customers.reducer';
import { CustomersService } from './customers-feature-state/customers.service';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LetModule } from '@ngrx/component';
import { Observable } from 'rxjs';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { customersPageActions } from './customers-feature-state/customers.actions';
import { customersSelectors } from './customers-feature-state/customers.selectors';
import { Customer } from 'src/app/shared/models';

export interface CustomersViewModel {
  customers: Customer[];
  loading: boolean;
  limit: number;
  offset: number;
  pageIndex: number;
  totalCount: number;
  error: null | string;
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  vm$: Observable<CustomersViewModel>;

  displayedColumns = ['id', 'first_name', 'last_name', 'username','email', 'phone', 'orders'];
  pageSizeOptions = [5,10,20]

  constructor(private store: Store<CustomersState>) {
    this.vm$ = this.store.select(customersSelectors.selectState);
  }

  onPageEvent(event: PageEvent): void {
    const { pageIndex, pageSize } = event;
    return this.store.dispatch(customersPageActions.paginateCustomers({ pageIndex, pageSize }));
  }
}

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    LetModule,
    StoreModule.forFeature(CUSTOMERS_FEATURE_KEY, customersReducer),
    EffectsModule.forFeature(CustomersEffects)
  ],
  declarations: [CustomersComponent],
  exports: [CustomersComponent],
  providers: [CustomersService]
})
export class CustomersModule {}
