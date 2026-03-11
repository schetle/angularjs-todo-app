import { Form, Button } from 'react-bootstrap';
import type { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggleDone: (id: string) => void;
  onRemove: (id: string) => void;
  onArchive?: (id: string) => void;
  onUnarchive?: (id: string) => void;
}

function TodoItem({ todo, onToggleDone, onRemove, onArchive, onUnarchive }: TodoItemProps) {
  const handleRemove = () => {
    const confirmed = window.confirm(`Do you want to remove ${todo.text}?`);
    if (confirmed) {
      onRemove(todo.id);
    }
  };

  return (
    <div className="mt-2">
      {onArchive && (
        <label className="checkbox">
          <Form.Check
            type="checkbox"
            checked={todo.done}
            onChange={() => onToggleDone(todo.id)}
            inline
            label={
              <span className={todo.done ? 'done-true' : ''}>{todo.text}</span>
            }
          />
        </label>
      )}
      {onUnarchive && (
        <label className="checkbox">
          <span className={todo.done ? 'done-true' : ''}>{todo.text}</span>
        </label>
      )}
      {' '}
      {onArchive && (
        <>
          <Button variant="danger" size="sm" className="btn-rounded" onClick={handleRemove}>
            Remove
          </Button>{' '}
          <Button variant="info" size="sm" className="btn-rounded" onClick={() => onArchive(todo.id)}>
            Archive
          </Button>
        </>
      )}
      {onUnarchive && (
        <Button variant="info" size="sm" className="btn-rounded" onClick={() => onUnarchive(todo.id)}>
          Unarchive
        </Button>
      )}
    </div>
  );
}

export default TodoItem;
