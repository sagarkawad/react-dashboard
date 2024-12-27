import { supabase } from './client';
import type { Order, OrderStatus } from '../../types/order';

export async function fetchOrders() {
  const { data, error } = await supabase
    .from('orders')
    .select(`
      *,
      user:user_id (
        id,
        email
      )
    `)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data as Order[];
}

export async function updateOrderStatus(orderId: string, status: OrderStatus) {
  const { error } = await supabase
    .from('orders')
    .update({ status })
    .eq('order_id', orderId);

  if (error) throw error;
}