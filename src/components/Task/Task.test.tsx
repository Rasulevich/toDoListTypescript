import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Task from "./Task";

window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
};

const props = {
  todo: {
    text:'text',
    id:3
  },
  deleteTodo:jest.fn(),
  setEditTodo: jest.fn()
}

test("expected List-item to be in Task component" , () => {
  const {queryByTestId} = render(<Task {...props}/>)
  const listItem = queryByTestId('list-item')
  expect(listItem).toBeInTheDocument() 
  expect(listItem).toHaveTextContent(props.todo.text);
})

test("expected Delete button to be clicked" , () => {
  const {queryByTestId} = render(<Task {...props}/>)
  const deleteButton = queryByTestId('delete-button') as HTMLElement
  userEvent.click(deleteButton) 
  expect(props.deleteTodo).toHaveBeenCalled();
  expect(props.deleteTodo).toHaveBeenCalledTimes(1);
})

test("expected Edit button to be clicked" , () => {
  const {queryByTestId} = render(<Task {...props}/>)
  const editButton = queryByTestId('edit-button') as HTMLElement
  userEvent.click(editButton)
  expect(props.setEditTodo).toHaveBeenCalled();
  expect(props.setEditTodo).toHaveBeenCalledTimes(1);
})

