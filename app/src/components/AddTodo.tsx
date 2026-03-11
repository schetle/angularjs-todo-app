import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

interface AddTodoProps {
  onAdd: (text: string) => boolean;
}

function AddTodo({ onAdd }: AddTodoProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = onAdd(text);
    if (success) {
      setText('');
    } else {
      window.alert('Error: The todo is empty, please write something');
    }
  };

  return (
    <div className="col-12 mt-2">
      <Form onSubmit={handleSubmit} className="d-inline">
        <Form.Control
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="add new todo here"
          size="sm"
          style={{ width: 'auto', display: 'inline-block' }}
          className="me-2"
        />
        <Button variant="primary" size="sm" className="btn-rounded" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
}

export default AddTodo;
