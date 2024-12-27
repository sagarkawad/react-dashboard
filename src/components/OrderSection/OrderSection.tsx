import { useDroppable } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { OrderCard } from '../OrderCard/OrderCard';
import { SectionHeader } from './SectionHeader';
import { EmptyState } from './EmptyState';
import type { Order, OrderStatus } from '../../types/order';

interface OrderSectionProps {
  title: string;
  orders: Order[];
  status: OrderStatus;
  color: string;
}

export function OrderSection({ title, orders, status, color }: OrderSectionProps) {
  const { setNodeRef } = useDroppable({ id: status });

  console.log(orders.length, "orders length")
 

  return (
    <div className={`bg-${color}-50 rounded-lg p-4 border border-${color}-100`}>
      <SectionHeader title={title} count={orders.length} />
      
      <div ref={setNodeRef} className="space-y-3">
        <SortableContext
          items={orders.map((order) => order.order_id)}
          strategy={verticalListSortingStrategy}
        >
          {orders.map((order) => (
            <OrderCard key={order.order_id} order={order} />
          ))}
        </SortableContext>
        
        {orders.length === 0 && <EmptyState />}
      </div>
    </div>
  );
}