import { render } from '@testing-library/react';
import TaskList from "./TaskList";

window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
};

const props = {
  todos: [{ 
      text:'text',
      id:3
    }], 
   deleteTodo:jest.fn(),
  editTodo: jest.fn()
}
  
test("expected <Modal> not to be in TaskList component" , () => {
  const {queryByTestId} = render(<TaskList {...props}/>)
  const editModal = queryByTestId('edit-modal')
  expect(editModal).not.toBeInTheDocument() 
})

test("expected <Task> to be in TaskList component" , () => {
  const {queryByTestId} = render(<TaskList {...props}/>)
  const taskList =queryByTestId('task-list')
  expect(taskList).toBeInTheDocument() 
})

