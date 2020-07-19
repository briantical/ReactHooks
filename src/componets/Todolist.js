import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { TodoContext } from '../context/TodoContext';
import { SET_TODOS, SET_ERROR } from '../context/todoActionTypes';
import Todo from './Todo';

export default function Todolist() {
  const { todos, dispatch } = useContext(TodoContext);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        dispatch({
          type: SET_TODOS,
          payload: response.data
        });
      })
      .catch((error) => {
        dispatch({
          type: SET_ERROR,
          payload: error
        });
      });
  }, []);
  const { todos: theTodos, error } = todos;
  if (error) {
    return <div>{error}</div>;
  } else {
    return (
      <div>
        {theTodos.map((todo, index) => {
          const { id, title, completed, userId } = todo;
          return <Todo key={index} title={title} id={id} completed={completed} userId={userId} />;
        })}
      </div>
    );
  }
}
