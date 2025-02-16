import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { useStore } from '../store/useStore';
import { Priority, Category } from '../types';

export const TaskForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [category, setCategory] = useState<Category>('personal');
  const [dueDate, setDueDate] = useState('');
  
  const addTask = useStore((state) => state.addTask);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask({
      title,
      description,
      priority,
      category,
      completed: false,
      dueDate: dueDate ? new Date(dueDate) : undefined,
      subtasks: [],
    });
    setIsOpen(false);
    setTitle('');
    setDescription('');
    setPriority('medium');
    setCategory('personal');
    setDueDate('');
  };

  return (
    <div className="mb-6">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
        >
          <Plus size={20} />
          <span>Add New Task</span>
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Create New Task</h3>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="priority" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Priority
                </label>
                <select
                  id="priority"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value as Priority)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Category
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value as Category)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="work">Work</option>
                  <option value="personal">Personal</option>
                  <option value="errands">Errands</option>
                  <option value="health">Health</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Due Date
              </label>
              <input
                type="date"
                id="dueDate"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
              >
                Create Task
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};