import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {

}

@NgModule({
  imports: [CommonModule],
  declarations: [CustomersComponent]
})
export class CustomersModule {}
