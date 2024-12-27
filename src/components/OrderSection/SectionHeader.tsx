import React from 'react';

interface SectionHeaderProps {
  title: string;
  count: number;
}

export function SectionHeader({ title, count }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      <span className="px-3 py-1 rounded-full bg-white text-sm font-medium text-gray-600 border border-gray-200">
        {count}
      </span>
    </div>
  );
}