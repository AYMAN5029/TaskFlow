import React from 'react';
import { Header } from './components/Header';
import { TaskCard } from './components/TaskCard';
import { TaskForm } from './components/TaskForm';
import { KanbanView } from './components/KanbanView';
import { CalendarView } from './components/CalendarView';
import { QuoteDisplay } from './components/QuoteDisplay';
import { PomodoroTimer } from './components/PomodoroTimer';
import { useStore } from './store/useStore';

function App() {
  const { tasks, theme, view } = useStore();

  const renderTasks = () => {
    switch (view) {
      case 'kanban':
        return <KanbanView tasks={tasks} />;
      case 'calendar':
        return <CalendarView tasks={tasks} />;
      default:
        return (
          <div className="space-y-4">
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
            {tasks.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  No tasks yet
                </h3>
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  Get started by adding your first task
                </p>
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className={theme}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <QuoteDisplay />
          <TaskForm />
          {renderTasks()}
        </main>
        <PomodoroTimer />
      </div>
    </div>
  );
}

export default App;