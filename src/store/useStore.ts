import { create } from 'zustand';
import { Task, Priority, Category, ViewType } from '../types';

interface TaskStore {
  tasks: Task[];
  view: ViewType;
  theme: 'light' | 'dark';
  addTask: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  toggleTask: (id: string) => void;
  removeTask: (id: string) => void;
  setView: (view: ViewType) => void;
  toggleTheme: () => void;
}

export const useStore = create<TaskStore>((set) => ({
  tasks: [],
  view: 'list',
  theme: 'light',
  addTask: (task) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          ...task,
          id: crypto.randomUUID(),
          createdAt: new Date(),
        },
      ],
    })),
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),
  removeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
  setView: (view) => set({ view }),
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}));