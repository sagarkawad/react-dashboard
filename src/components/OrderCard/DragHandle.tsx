import { GripVertical } from 'lucide-react';
import type { DraggableAttributes } from '@dnd-kit/core';
import type { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';

interface DragHandleProps {
  attributes: DraggableAttributes;
  listeners: SyntheticListenerMap;
}

export function DragHandle({ attributes, listeners }: DragHandleProps) {
  return (
    <button
      {...attributes}
      {...listeners}
      className="cursor-grab hover:bg-gray-100 p-1 rounded"
    >
      <GripVertical className="w-5 h-5 text-gray-500" />
    </button>
  );
}