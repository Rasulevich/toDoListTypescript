import NewTaskForm from './NewTaskForm';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
};

const props = {
  addTodo:jest.fn(),
}

test("expected Input to be in NewTaskForm component" , () => {
  const {queryByTestId} = render(<NewTaskForm {...props}/>)
  const input = queryByTestId('input')
  expect(input).toBeInTheDocument() 
})

test("expected Button to be in NewTaskForm component, to be clicked" , () => {
  const {queryByTestId} = render(<NewTaskForm {...props}/>)
  const addTodoButton = queryByTestId('addTodoButton') as HTMLElement
  userEvent.click(addTodoButton)
  expect(addTodoButton).toBeInTheDocument();
  expect(props.addTodo).toHaveBeenCalled(); 
})









 



