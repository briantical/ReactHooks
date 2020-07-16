import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { TodoContext } from '../context/TodoContext';
import { SET_TODOS, SET_ERROR } from '../context/todoActionTypes';

export default function Todolist() {
  const [title, setTitle] = useState('');
  const { todos, dispatch } = useContext(TodoContext);

  return <div>{JSON.stringify(todos)}</div>;
}

