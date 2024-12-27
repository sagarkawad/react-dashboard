import { MapPin, IndianRupee, Clock, Bike, ListOrdered } from 'lucide-react';
import type { Order } from '../../types/order';

interface OrderCardContentProps {
  order: Order;
}

export function OrderCardContent({ order }: OrderCardContentProps) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR'
  }).format(order.total_price);

  const formattedDate = new Date(order.created_at).toLocaleDateString();

  return (
    <div className="flex-1 space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-gray-900">{order.users.email} <br></br> Name - {order.users.name} <br></br> Age - {order.users.age}</h3>
        <span className="text-sm text-gray-500">#{order.order_id.slice(0, 8)}</span>
      </div>
      
      <div className="space-y-1 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>{order.address || "No Location"}</span>
        </div>

        <div className="flex items-center gap-2">
          <Bike className="w-4 h-4" />
          <span>{order.product.name}</span>
        </div>

        <div className="flex items-center gap-2">
          <ListOrdered className="w-4 h-4" />
          <span>{order.quantity}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <IndianRupee className="w-4 h-4" />
          <span>{formattedPrice}</span>
        </div>
        
      
        
        <div className="flex items-center gap-2 text-gray-500">
          <Clock className="w-4 h-4" />
          <span>{formattedDate}</span>
        </div>
      </div>
    </div>
  );
}