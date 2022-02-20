import { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  // Add Todo
  const addTodo = (todo) => {
    // Makes sure that the user is typing in characters
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [...todos, todo];

    setTodos(newTodos);
    console.log(todo);
  };

  // Edit Todo
  const updateTodo = (todoId, newValue) => {
    // Makes sure that the user is typing in characters
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  // Remove Todo
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  // Complete Todo
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>What's The Plan For Today?</h1>
      <TodoForm onSubmit={addTodo} updateTodo={updateTodo} />
      <div className='todo-list'>
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </div>
    </>
  );
}

export default TodoList;
