import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CustomersEffects } from './customers-feature-state/customers.effects';
import { customersReducer, CUSTOMERS_FEATURE_KEY } from './customers-feature-state/customers.reducer';
import { CustomersService } from './customers-feature-state/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {

}

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(CUSTOMERS_FEATURE_KEY, customersReducer),
    EffectsModule.forFeature(CustomersEffects)
  ],
  declarations: [CustomersComponent],
  exports: [CustomersComponent],
  providers: [CustomersService]
})
export class CustomersModule {}
