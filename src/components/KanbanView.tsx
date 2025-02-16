import React from 'react';
import { Task } from '../types';
import { TaskCard } from './TaskCard';

interface KanbanColumn {
  title: string;
  tasks: Task[];
}

export const KanbanView: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  const columns: KanbanColumn[] = [
    {
      title: 'To Do',
      tasks: tasks.filter(task => !task.completed),
    },
    {
      title: 'Completed',
      tasks: tasks.filter(task => task.completed),
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      {columns.map((column) => (
        <div
          key={column.title}
          className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4"
        >
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            {column.title}
          </h3>
          <div className="space-y-4">
            {column.tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};