import React from 'react';
import TodoContextProvider from './context/TodoContext';
import Todolist from './componets/Todolist';

export default function App() {
  return (
    <TodoContextProvider>
      <Todolist />
    </TodoContextProvider>
  );
}
