import { supabase } from '../lib/supabase';
import type { Order } from '../types/order';

export async function fetchOrders(): Promise<Order[]> {
  const { data, error } = await supabase
    .from('orders')
    .select('order_id, created_at, address, users!user_id(email, name, age), product!product_id(name), total_price, quantity')
    .order('created_at', { ascending: false }) as {
      data: Order[] | null,
      error: any,
    };

  if (error) throw error;
  return data as Order[];
}