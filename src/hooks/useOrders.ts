import { useState, useEffect, useCallback } from 'react';
import { fetchOrders } from '../services/orderService';
import type { Order, OrderStatus } from '../types/order';

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadOrders = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchOrders();
      // Set all orders as pending initially
      setOrders(data.map(order => ({ ...order, status: 'pending' })));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch orders');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateOrderStatus = useCallback((orderId: string, newStatus: OrderStatus) => {
    setOrders(currentOrders => 
      currentOrders.map(order => 
        order.order_id === orderId 
          ? { ...order, status: newStatus }
          : order
      )
    );
  }, []);

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  return {
    orders,
    pendingOrders: orders.reverse().filter(order => order.status === 'pending'),
    inProcessOrders: orders.reverse().filter(order => order.status === 'in_process'),
    completedOrders: orders.reverse().filter(order => order.status === 'completed'),
    isLoading,
    error,
    updateOrderStatus,
  };
}