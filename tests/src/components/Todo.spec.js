import React from 'react';
import { mount } from 'enzyme';
import Todo from '../../../src/componets/Todo';
import TodoContextProvider from '../../../src/context/TodoContext';

const setUp = (props) => {
  const wrapper = mount(
    <TodoContextProvider>
      <Todo {...props} />
    </TodoContextProvider>
  );
  return wrapper;
};

describe('Todo Component', () => {
  it('Todo should exist', () => {
    const wrapper = setUp();
    const container = wrapper.find(`[data-test='todo-container']`);

    expect(container.exists()).toBe(true);
  });

  it('Should contain the todo task', () => {
    const wrapper = setUp({ title: 'Checkout github' });
    const todotask = wrapper.find(`[data-test='todo-task']`);

    expect(todotask.length).toBe(1);
    expect(todotask.text()).toEqual('Checkout github');
  });

  it('should render delete button', () => {
    const wrapper = setUp();
    const deleteBtn = wrapper.find(`[data-test='delete-todo']`);

    expect(deleteBtn.length).toBe(1);
  });

  it('Should render a complete checkbox', () => {
    const wrapper = setUp();
    const checkbox = wrapper.find(`[data-test='complete-todo']`);

    expect(checkbox.length).toBe(1);
  });

  it('Should mark task as complete', () => {
    const wrapper = setUp({ completed: false });
    const checkbox = wrapper.find(`[data-test='complete-todo']`);
    expect(checkbox.props().checked).toBe(false);
    checkbox.simulate('change', { target: { checked: true } });
    wrapper.update();
    expect(wrapper.find(`[data-test='complete-todo']`).props().checked).toBe(true);
    wrapper.find(`[data-test='complete-todo']`).simulate('change', { target: { checked: false } });
    wrapper.update();
    expect(wrapper.find(`[data-test='complete-todo']`).props().checked).toBe(false);
  });
});
