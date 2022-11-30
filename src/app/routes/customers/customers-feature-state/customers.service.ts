import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { map, Observable } from "rxjs";
import { ApiResponse, Customer, PagintationInfo } from "src/app/shared/models";
import { LOAD_CUSTOMERS } from "./customers.queries";


@Injectable()
export class CustomersService {
  constructor(private apollo: Apollo) {}

  loadCustomers(paginationInfo: PagintationInfo): Observable<Customer[]> {
    return this.apollo.query<ApiResponse>({
      query: LOAD_CUSTOMERS,
      variables: {
        ...paginationInfo
      }
    }).pipe(
      map((res) => res.data.data.customers)
    )
  }

}
