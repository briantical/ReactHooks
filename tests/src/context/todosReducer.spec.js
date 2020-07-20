import todosReducer from '../../../src/context/todosReducer';
import { ADD_TODO, EDIT_TODO, REMOVE_TODO, SET_ERROR, SET_TODOS } from '../../../src/context/todoActionTypes';

const todo = {
  userId: 1,
  id: 3,
  title: 'et porro tempora',
  completed: true
};

const todos = [
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
  }
];

const newtodos = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia quighfh',
    completed: true
  }
];

const newtodo = {
  userId: 1,
  id: 2,
  title: 'quis ut nam facilis et officia quighfh',
  completed: true
};

describe('Todoreducer functions', () => {
  it('Add new todos', () => {
    const state = {
      todos: [],
      error: null
    };
    const action = {
      type: SET_TODOS,
      payload: todos
    };
    const newState = todosReducer(state, action);

    expect(newState).toEqual({
      todos,
      error: null
    });
  });

  it('A new todo should added', () => {
    const state = {
      todos,
      error: null
    };
    const action = {
      type: ADD_TODO,
      payload: todo
    };
    const newState = todosReducer(state, action);

    expect(newState).toEqual({
      todos: [...todos, todo],
      error: null
    });
  });

  it('Should edit the todo', () => {
    const state = {
      todos,
      error: null
    };
    const action = {
      type: EDIT_TODO,
      payload: newtodo
    };
    const newState = todosReducer(state, action);

    expect(newState).toEqual({
      todos: newtodos,
      error: null
    });
  });

  it('Should delete the todo', () => {
    const state = {
      todos,
      error: null
    };
    const action = {
      type: REMOVE_TODO,
      payload: 1
    };
    const newState = todosReducer(state, action);

    expect(newState).toEqual({
      todos: [
        {
          userId: 1,
          id: 2,
          title: 'quis ut nam facilis et officia qui',
          completed: false
        }
      ],
      error: null
    });
    expect(newState.todos.length).toEqual(todos.length - 1);
  });

  it('Should return error', () => {
    const state = {
      todos: [todo],
      error: null
    };
    const action = {
      type: SET_ERROR,
      payload: 'Some error'
    };
    const newState = todosReducer(state, action);

    expect(newState.error).toBeTruthy();
  });
});
