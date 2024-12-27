import { DndContext, DragEndEvent, closestCenter } from '@dnd-kit/core';
import { OrderSection } from './components/OrderSection/OrderSection';
import { Header } from './components/Layout/Header';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorBoundary } from './components/ErrorBoundary';
import { useOrders } from './hooks/useOrders';
import type { OrderStatus } from './types/order';

function App() {
  const {
    pendingOrders,
    inProcessOrders,
    completedOrders,
    isLoading,
    error,
    orders,
    updateOrderStatus,
  } = useOrders();


  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;

    const orderId = active.id as string;
    const newStatus = over.id as OrderStatus;
    console.log("newStatus - ", newStatus)
    console.log("event - ", event)
    if (newStatus === "pending" || newStatus === "in_process" || newStatus === "completed") {
    updateOrderStatus(orderId, newStatus);
    } else {
    const newOrderStatus = orders.find(order => order.order_id === over.id)?.status as OrderStatus;
    if (newOrderStatus) {
      updateOrderStatus(orderId, newOrderStatus);
    }
  }
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-lg w-full">
          <h2 className="text-xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <OrderSection
                title="Pending Orders"
                orders={pendingOrders}
                status="pending"
                color="yellow"
              />
              <OrderSection
                title="In Process"
                orders={inProcessOrders}
                status="in_process"
                color="blue"
              />
              <OrderSection
                title="Completed"
                orders={completedOrders}
                status="completed"
                color="green"
              />
            </div>
          </DndContext>
        )}
      </main>
    </div>
  );
}

export default function AppWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}