import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './pages/customers/customers.component';

const routes: Routes = [
  { path: 'customers', component: CustomersComponent, pathMatch: 'full' },
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
