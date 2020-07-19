import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/App';
import TodoList from '../../src/componets/Todolist';

const setUp = () => {
  const component = shallow(<App />);
  return component;
};

describe('The App component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('Should display the todolist', () => {
    const wrapper = component.find(TodoList);
    // console.log(component.debug());
    expect(wrapper.exists()).toBe(true);
  });
});
