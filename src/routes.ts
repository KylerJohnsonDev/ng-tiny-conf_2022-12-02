import { Routes } from '@angular/router';
import { CustomersEffects } from './app/pages/customers/customers-feature-state/customers.effects';
import { customersFeature } from './app/pages/customers/customers-feature-state/customers.reducer';
import { CustomersService } from './app/pages/customers/customers-feature-state/customers.service';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { CustomersComponent } from './app/pages/customers/customers.component';

export const routes: Routes = [
  {
    path: 'customers',
    providers: [
      CustomersService,
      provideState(customersFeature),
      provideEffects(CustomersEffects),
    ],
    component: CustomersComponent,
    pathMatch: 'full',
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./app/pages/orders/orders.component').then((m) => m.OrdersModule),
  },
  { path: '', pathMatch: 'full', redirectTo: '/customers' },
];
