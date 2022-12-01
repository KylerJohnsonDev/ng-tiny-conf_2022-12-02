import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { Customer } from 'src/app/shared/models';

@Component({
  selector: 'app-customers-table',
  standalone: true,
  imports: [NgClass, MatTableModule, MatPaginatorModule],
  template: `
    <table
      mat-table
      [dataSource]="customers"
      [ngClass]="{ 'loading-table': loading }"
    >
      <ng-container matColumnDef="id" [sticky]="true">
        <th mat-header-cell *matHeaderCellDef>ID</th>
        <td mat-cell *matCellDef="let element">{{ element.id }}</td>
      </ng-container>

      <ng-container matColumnDef="first_name">
        <th mat-header-cell *matHeaderCellDef>First</th>
        <td mat-cell *matCellDef="let element">{{ element.first_name }}</td>
      </ng-container>

      <ng-container matColumnDef="last_name">
        <th mat-header-cell *matHeaderCellDef>Last</th>
        <td mat-cell *matCellDef="let element">{{ element.last_name }}</td>
      </ng-container>

      <ng-container matColumnDef="username">
        <th mat-header-cell *matHeaderCellDef>Username</th>
        <td mat-cell *matCellDef="let element">{{ element.username }}</td>
      </ng-container>

      <ng-container matColumnDef="email">
        <th mat-header-cell *matHeaderCellDef>Email</th>
        <td mat-cell *matCellDef="let element">{{ element.email }}</td>
      </ng-container>

      <ng-container matColumnDef="phone">
        <th mat-header-cell *matHeaderCellDef>Phone</th>
        <td mat-cell *matCellDef="let element">{{ element.phone }}</td>
      </ng-container>

      <ng-container matColumnDef="orders">
        <th mat-header-cell *matHeaderCellDef>No. Orders</th>
        <td mat-cell *matCellDef="let element">
          {{ element.orders.length ?? 0 }}
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
    </table>

    <mat-paginator
      [pageSize]="pageSize"
      [pageIndex]="pageIndex"
      [length]="totalCount"
      [pageSizeOptions]="pageSizeOptions"
      (page)="pageEvent.emit($event)"
    >
    </mat-paginator>
  `,
  styles: [
    `
      table {
        border-bottom: 1px solid lightgray;
        height: 317px;
        overflow: auto;
      }

      .loading-table {
        display: none;
      }
    `,
  ],
})
export class CustomersTableComponent {
  @Input() customers!: Customer[];
  @Input() loading!: boolean;
  @Input() pageIndex!: number;
  @Input() pageSize!: number;
  @Input() totalCount!: number;

  @Output() pageEvent = new EventEmitter<PageEvent>();

  displayedColumns = [
    'id',
    'first_name',
    'last_name',
    'username',
    'email',
    'phone',
    'orders',
  ];
  pageSizeOptions = [5, 10, 20];
}
