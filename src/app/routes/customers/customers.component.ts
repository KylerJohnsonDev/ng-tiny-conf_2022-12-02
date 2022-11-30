import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { CustomersEffects } from './customers-feature-state/customers.effects';
import { customersReducer, CustomersState, CUSTOMERS_FEATURE_KEY } from './customers-feature-state/customers.reducer';
import { CustomersService } from './customers-feature-state/customers.service';
import { MatTableModule } from '@angular/material/table';
import { LetModule } from '@ngrx/component';
import { CustomersViewModel, selectVM } from './customers.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  vm$: Observable<CustomersViewModel>;

  displayedColumns = ['id', 'first_name', 'last_name', 'username','email', 'phone', 'orders']

  constructor(private store: Store<CustomersState>) {
    this.vm$ = this.store.select(selectVM);
  }
}

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    LetModule,
    StoreModule.forFeature(CUSTOMERS_FEATURE_KEY, customersReducer),
    EffectsModule.forFeature(CustomersEffects)
  ],
  declarations: [CustomersComponent],
  exports: [CustomersComponent],
  providers: [CustomersService]
})
export class CustomersModule {}
