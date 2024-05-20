export interface Todo {
  id: number;
  title: string;
  category: string;
  description?: string;
}

export type CreateTodo = Omit<Todo, 'id'>;
