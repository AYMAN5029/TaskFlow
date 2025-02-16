import React from 'react';
import { format } from 'date-fns';
import { Clock, Trash2, Check } from 'lucide-react';
import { Task } from '../types';
import { useStore } from '../store/useStore';
import { cn } from '../lib/utils';

interface TaskCardProps {
  task: Task;
}

const priorityColors = {
  low: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
  medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300',
  high: 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300',
  urgent: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300',
};

const categoryIcons = {
  work: '💼',
  personal: '🏠',
  errands: '🛍️',
  health: '💪',
};

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const toggleTask = useStore((state) => state.toggleTask);
  const removeTask = useStore((state) => state.removeTask);

  return (
    <div className={cn(
      "group bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300",
      task.completed && "bg-gray-50 dark:bg-gray-800/50"
    )}>
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3">
          <button
            onClick={() => toggleTask(task.id)}
            className={cn(
              "mt-1 h-5 w-5 rounded-full border-2 border-gray-300 dark:border-gray-600",
              "hover:border-indigo-500 dark:hover:border-indigo-400",
              "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
              "transition-all duration-300",
              task.completed && "bg-indigo-500 border-indigo-500 dark:bg-indigo-400 dark:border-indigo-400"
            )}
          >
            <Check
              size={16}
              className={cn(
                "text-white transform scale-0 transition-transform duration-300",
                task.completed && "scale-100"
              )}
            />
          </button>
          <div className="flex-1">
            <h3 className={cn(
              "text-lg font-medium text-gray-900 dark:text-white transition-all duration-300",
              task.completed && "line-through text-gray-500 dark:text-gray-400"
            )}>
              {task.title}
            </h3>
            {task.description && (
              <p className={cn(
                "text-gray-600 dark:text-gray-400 mt-1 transition-all duration-300",
                task.completed && "text-gray-400 dark:text-gray-500"
              )}>
                {task.description}
              </p>
            )}
          </div>
        </div>
        <button
          onClick={() => removeTask(task.id)}
          className="text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
        >
          <Trash2 size={18} />
        </button>
      </div>
      
      <div className="mt-4 flex items-center space-x-4">
        <span className={cn(
          "px-2 py-1 rounded-full text-xs font-medium transition-colors duration-300",
          priorityColors[task.priority]
        )}>
          {task.priority}
        </span>
        <span className="text-gray-600 dark:text-gray-400">
          {categoryIcons[task.category]} {task.category}
        </span>
        {task.dueDate && (
          <span className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
            <Clock size={14} className="mr-1" />
            {format(new Date(task.dueDate), 'MMM d, yyyy')}
          </span>
        )}
      </div>
      
      {task.subtasks.length > 0 && (
        <div className="mt-3 pl-7 space-y-2">
          {task.subtasks.map((subtask) => (
            <div key={subtask.id} className="flex items-center space-x-2">
              <button
                className={cn(
                  "h-3 w-3 rounded-full border-2 border-gray-300 dark:border-gray-600",
                  "transition-all duration-300",
                  subtask.completed && "bg-indigo-500 border-indigo-500 dark:bg-indigo-400 dark:border-indigo-400"
                )}
              >
                <Check
                  size={8}
                  className={cn(
                    "text-white transform scale-0 transition-transform duration-300",
                    subtask.completed && "scale-100"
                  )}
                />
              </button>
              <span className={cn(
                "text-sm text-gray-700 dark:text-gray-300 transition-all duration-300",
                subtask.completed && "line-through text-gray-500 dark:text-gray-400"
              )}>
                {subtask.title}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};