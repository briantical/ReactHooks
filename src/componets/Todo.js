import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { EDIT_TODO, REMOVE_TODO } from '../context/todoActionTypes';

export default function Todo(props) {
  const { title, completed, userId, id } = props;
  const [complete, setComplete] = useState(completed);
  const { dispatch } = useContext(TodoContext);

  const completeTodo = () => {
    setComplete(!complete);
    dispatch({ type: EDIT_TODO, payload: { id, userId, completed: complete, title } });
  };

  const removeTodo = (id) => {
    dispatch({ type: REMOVE_TODO, payload: id });
  };

  return (
    <div>
      <div className="todo-container" data-test="todo-container">
        <span className="todo-task" data-test="todo-task">
          {title}
        </span>
        <input
          type="checkbox"
          className="complete-todo"
          data-test="complete-todo"
          checked={complete}
          onChange={completeTodo}
        />
        <button className="delete-todo" data-test="delete-todo" onClick={() => removeTodo(id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
