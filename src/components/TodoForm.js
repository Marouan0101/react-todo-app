import { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputFocus = useRef(null);

  useEffect(() => {
    inputFocus.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Date.now(),
      text: input,
    });

    setInput('');
  };

  return (
    <>
      <form
        className={props.edit ? 'todo-form edit' : 'todo-form'}
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          placeholder={props.edit ? 'Update your item' : 'Create a new todo'}
          value={input}
          name='text'
          autocomplete='off'
          className={props.edit ? 'todo-input edit' : 'todo-input'}
          onChange={handleChange}
          ref={inputFocus}
        />

        <button className={props.edit ? 'todo-btn edit' : 'todo-btn'}>
          {props.edit ? 'Update' : 'Add'}
        </button>
      </form>
    </>
  );
}

export default TodoForm;
