export type Priority = 'low' | 'medium' | 'high' | 'urgent';
export type Category = 'work' | 'personal' | 'errands' | 'health';
export type ViewType = 'kanban' | 'list' | 'calendar';

export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: Priority;
  category: Category;
  dueDate?: Date;
  createdAt: Date;
  subtasks: SubTask[];
  recurring?: {
    frequency: 'daily' | 'weekly' | 'monthly';
    endDate?: Date;
  };
}

export interface SubTask {
  id: string;
  title: string;
  completed: boolean;
}