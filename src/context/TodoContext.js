import React, { createContext, useReducer } from 'react';
import todosReducer, { initialState } from './todosReducer';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [todos, dispatch] = useReducer(todosReducer, initialState);

  return <TodoContext.Provider value={{ todos, dispatch }}>{props.children}</TodoContext.Provider>;
};

export default TodoContextProvider;
