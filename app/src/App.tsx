import { useTodos } from './hooks/useTodos';
import Layout from './components/Layout';
import TodoList from './components/TodoList';
import ArchivedList from './components/ArchivedList';
import AddTodo from './components/AddTodo';

function App() {
  const {
    activeTodos,
    archivedTodos,
    totalCount,
    completedCount,
    addTodo,
    toggleDone,
    removeTodo,
    archiveTodo,
    unarchiveTodo,
  } = useTodos();

  return (
    <Layout
      activePanel={
        <TodoList
          todos={activeTodos}
          onToggleDone={toggleDone}
          onRemove={removeTodo}
          onArchive={archiveTodo}
        />
      }
      archivedPanel={
        <ArchivedList
          todos={archivedTodos}
          onToggleDone={toggleDone}
          onRemove={removeTodo}
          onUnarchive={unarchiveTodo}
        />
      }
      counter={<h5>{completedCount} completed of {totalCount}</h5>}
      addForm={<AddTodo onAdd={addTodo} />}
    />
  );
}

export default App;
