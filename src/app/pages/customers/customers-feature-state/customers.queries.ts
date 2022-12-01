import { gql } from 'apollo-angular';

export const LOAD_CUSTOMERS = gql`
  query lookupCustomerOrder($limit: Int, $offset: Int) {
    customer(limit: $limit, offset: $offset, order_by: { first_name: asc }) {
      id
      first_name
      last_name
      username
      email
      phone
      orders(order_by: { order_date: asc }) {
        id
        order_date
        product
        purchase_price
        discount_price
      }
    }
    customer_aggregate {
      aggregate {
        count
      }
    }
  }
`;
