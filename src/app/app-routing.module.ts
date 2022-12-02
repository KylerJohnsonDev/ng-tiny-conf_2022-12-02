import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { CustomersEffects } from './pages/customers/customers-feature-state/customers.effects';
import { customersFeature } from './pages/customers/customers-feature-state/customers.reducer';
import { CustomersService } from './pages/customers/customers-feature-state/customers.service';
import { CustomersComponent } from './pages/customers/customers.component';

const routes: Routes = [
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
      import('./pages/orders/orders.component').then((m) => m.OrdersModule),
  },
  { path: '', pathMatch: 'full', redirectTo: '/customers' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
