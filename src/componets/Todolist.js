import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { TodoContext } from '../context/TodoContext';
import { SET_TODOS, SET_ERROR } from '../context/todoActionTypes';

export default function Todolist() {
  const [title, setTitle] = useState('');
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

  return <div>{JSON.stringify(todos)}</div>;
}
