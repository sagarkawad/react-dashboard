export type OrderStatus = 'pending' | 'in_process' | 'completed';

export interface Order {
  order_id: string;
  address: string;
  created_at: string;
  total_price: number;
  product: {
    name: string,
  }
  quantity: number;
  users: {
    email: string,
    name: string,
    age: number,
  }
  status: string,
}