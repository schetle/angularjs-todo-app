import type { Todo } from '../types/todo';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onToggleDone: (id: string) => void;
  onRemove: (id: string) => void;
  onArchive: (id: string) => void;
}

function TodoList({ todos, onToggleDone, onRemove, onArchive }: TodoListProps) {
  return (
    <div className="active-panel mt-3 w-100 min-h-panel">
      <h4>Active Activities</h4>
      {todos.length === 0 && <span>Your todo's list is empty</span>}
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleDone={onToggleDone}
          onRemove={onRemove}
          onArchive={onArchive}
        />
      ))}
    </div>
  );
}

export default TodoList;
