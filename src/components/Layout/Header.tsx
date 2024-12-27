import { Package } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Package className="w-8 h-8 text-indigo-600 mr-3" />
          <h1 className="text-2xl font-bold text-gray-900">Blue Bikes Dashboard</h1>
        </div>
      </div>
    </header>
  );
}