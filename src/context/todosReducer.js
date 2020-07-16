import { ADD_TODO, EDIT_TODO, REMOVE_TODO, SET_ERROR, SET_TODOS } from './todoActionTypes';

export const initialState = {
  todos: [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false
    },
    {
      userId: 1,
      id: 3,
      title: 'fugiat veniam minus',
      completed: false
    },
    {
      userId: 1,
      id: 4,
      title: 'et porro tempora',
      completed: true
    }
  ],
  error: null
};
const todosReducer = (state = initialState, action) => {
  const { todos } = state;
  switch (action.type) {
    case SET_TODOS:
      return { ...state, todos: action.payload };
    case ADD_TODO:
      return { ...state, todos: [...todos, action.payload] };
    case EDIT_TODO:
      return {
        ...state,
        todos: todos.map((todo) => (todo.id === action.payload.id ? { ...todo, ...action.payload } : todo))
      };
    case REMOVE_TODO:
      return { ...state, todos: todos.filter((todo) => todo.id !== action.payload) };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default todosReducer;
