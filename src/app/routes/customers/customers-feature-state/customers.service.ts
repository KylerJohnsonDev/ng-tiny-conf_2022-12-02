import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { map, Observable } from "rxjs";
import { Customer, CustomerPayload, PagintationInfo } from "src/app/shared/models";
import { LOAD_CUSTOMERS } from "./customers.queries";


@Injectable()
export class CustomersService {
  constructor(private apollo: Apollo) {}

  loadCustomers(paginationInfo: PagintationInfo): Observable<Customer[]> {
    return this.apollo.query<CustomerPayload>({
      query: LOAD_CUSTOMERS,
      variables: {
        ...paginationInfo
      }
    }).pipe(
      map((res) => {
        return res.data.customer
      })
    )
  }

}
