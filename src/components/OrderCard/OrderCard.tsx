import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { OrderCardContent } from './OrderCardContent';
import { DragHandle } from './DragHandle';
import type { Order } from '../../types/order';

interface OrderCardProps {
  order: Order;
}

export function OrderCard({ order }: OrderCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: order.order_id });

  

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  console.log(order.status)

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-white rounded-lg shadow-md p-4"
    >
      <div className="flex items-center justify-between mb-3">
        <DragHandle attributes={attributes} listeners={listeners} />
        <OrderCardContent order={order} />
      </div>
    </div>
  );
}