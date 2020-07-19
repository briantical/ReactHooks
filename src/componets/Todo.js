import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { EDIT_TODO } from '../context/todoActionTypes';

export default function Todo(props) {
  const { title, completed, userId, id } = props;
  const [complete, setComplete] = useState(completed);
  const [todo, setTodo] = useState(title);
  const { tasks, dispatch } = useContext(TodoContext);

  const completeTodo = () => {
    setComplete(!complete);
  };

  const changeTodo = (event) => {
    setTodo(event.target.innerHTML);
  };

  const setNewTodo = () => {
    dispatch({ type: EDIT_TODO, payload: { id, userId, completed: complete, title: todo } });
  };
  return (
    <div>
      <div className="todo-container" data-test="todo-container">
        <span
          className="todo-task"
          data-test="todo-task"
          contentEditable={!complete}
          onInput={changeTodo}
          onBlur={setNewTodo}
        >
          {todo}
        </span>
        <input
          type="checkbox"
          className="complete-todo"
          data-test="complete-todo"
          checked={complete}
          onChange={completeTodo}
        />
        <button className="edit-todo" data-test="edit-todo">
          Edit
        </button>
      </div>
    </div>
  );
}
