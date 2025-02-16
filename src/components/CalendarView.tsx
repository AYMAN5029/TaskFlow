import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isToday, isSameDay } from 'date-fns';
import { Task } from '../types';
import { TaskCard } from './TaskCard';

export const CalendarView: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  const today = new Date();
  const monthStart = startOfMonth(today);
  const monthEnd = endOfMonth(today);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          {format(today, 'MMMM yyyy')}
        </h2>
      </div>
      <div className="grid grid-cols-7 gap-px">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div
            key={day}
            className="py-2 text-center text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {day}
          </div>
        ))}
        {days.map((day) => {
          const dayTasks = tasks.filter(
            (task) => task.dueDate && isSameDay(new Date(task.dueDate), day)
          );

          return (
            <div
              key={day.toISOString()}
              className={`min-h-[120px] p-2 border-t border-gray-200 dark:border-gray-700
                ${isToday(day) ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-white dark:bg-gray-800'}
              `}
            >
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                {format(day, 'd')}
              </div>
              <div className="mt-1 space-y-1">
                {dayTasks.map((task) => (
                  <div
                    key={task.id}
                    className="text-xs p-1 rounded bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300"
                  >
                    {task.title}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};