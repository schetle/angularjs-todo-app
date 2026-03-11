import type { Todo } from '../types/todo';
import TodoItem from './TodoItem';

interface ArchivedListProps {
  todos: Todo[];
  onToggleDone: (id: string) => void;
  onRemove: (id: string) => void;
  onUnarchive: (id: string) => void;
}

function ArchivedList({ todos, onToggleDone, onRemove, onUnarchive }: ArchivedListProps) {
  return (
    <div className="archive-panel mt-3 w-100 min-h-panel">
      <h4>Archived Activities</h4>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleDone={onToggleDone}
          onRemove={onRemove}
          onUnarchive={onUnarchive}
        />
      ))}
    </div>
  );
}

export default ArchivedList;
