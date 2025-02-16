import React from 'react';
import { Layout, Calendar, List, Columns, Sun, Moon } from 'lucide-react';
import { useStore } from '../store/useStore';
import { ViewType } from '../types';

const views: { type: ViewType; icon: React.ReactNode; label: string }[] = [
  { type: 'list', icon: <List size={20} />, label: 'List' },
  { type: 'kanban', icon: <Columns size={20} />, label: 'Kanban' },
  { type: 'calendar', icon: <Calendar size={20} />, label: 'Calendar' },
];

export const Header: React.FC = () => {
  const { view, theme, setView, toggleTheme } = useStore();

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Layout className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              TaskFlow
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
              {views.map(({ type, icon, label }) => (
                <button
                  key={type}
                  onClick={() => setView(type)}
                  className={`
                    flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium
                    ${view === type
                      ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }
                  `}
                >
                  {icon}
                  <span>{label}</span>
                </button>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              ) : (
                <Sun className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};