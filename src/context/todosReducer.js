import { ADD_TODO, EDIT_TODO, REMOVE_TODO, SET_ERROR, SET_TODOS } from './todoActionTypes';

export const initialState = {
  todos: [],
  error: null
};
const todosReducer = (state = initialState, action) => {
  const { todos } = state;
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...todos, action.payload]
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: todos.map((todo) =>
          todo.id === action.payload.id
            ? {
                ...todo,
                ...action.payload
              }
            : todo
        )
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: todos.filter((todo) => todo.id !== action.payload)
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default todosReducer;
