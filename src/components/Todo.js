import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { GrEdit } from 'react-icons/gr';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      onDoubleClick={() => completeTodo(todo.id)}
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id}>{todo.text}</div>

      <div className='icons'>
        <GrEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
        <GrClose onClick={() => removeTodo(todo.id)} className='delete-icon' />
      </div>
    </div>
  ));
}

export default Todo;
