

export interface CustomerPayload {
  customer: Customer[];
}

export interface Customer {
  id:         number;
  first_name: string;
  last_name:  string;
  username:   string;
  email:      string;
  phone:      string;
  orders:     Order[];
}

export interface Order {
  id:             number;
  order_date:     string;
  product:        string;
  purchase_price: string;
  discount_price: string;
}

export interface PagintationInfo {
  limit: number;
  offset: number;
}
