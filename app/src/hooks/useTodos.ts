import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { Todo } from '../types/todo';

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string): boolean => {
    const trimmed = text.trim();
    if (!trimmed) return false;
    setTodos(prev => [
      ...prev,
      { id: uuidv4(), text: trimmed, done: false, archived: false },
    ]);
    return true;
  };

  const toggleDone = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  const removeTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const archiveTodo = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, archived: true } : todo,
      ),
    );
  };

  const unarchiveTodo = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, archived: false } : todo,
      ),
    );
  };

  const activeTodos = todos.filter(t => !t.archived);
  const archivedTodos = todos.filter(t => t.archived);
  const totalCount = todos.length;
  const completedCount = todos.filter(t => t.done).length;

  return {
    todos,
    activeTodos,
    archivedTodos,
    totalCount,
    completedCount,
    addTodo,
    toggleDone,
    removeTodo,
    archiveTodo,
    unarchiveTodo,
  };
}
