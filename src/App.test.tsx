import App from './App';
import { render, fireEvent, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";


window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};

it("Field new todo input, press add button , add new todo" , () => {   
  act(() => {
    render(<App/>)
  })

  const event = { target: { value: "Test" } };

  act(() => {
    fireEvent.change(screen.getByTestId("input"), event);
  })  
  const inputValue = screen.getByTestId("input") as HTMLInputElement;
  expect(inputValue.value).toBe("Test");

  act(() => {
    fireEvent.click(screen.getByTestId("addTodoButton"));
  })
  expect(screen.getByText("Test")).toBeInTheDocument();
})


it("Press delete button, deleting todo", () => { 
  act(() => {
    render(<App/>)
  })
  
  const deleteButtons = screen.queryAllByTestId("delete-button");
  expect(screen.queryAllByTestId("list-item").length).toBe(2);
  
  act(() => {
    fireEvent.click(deleteButtons[0]);
  })
  expect(screen.queryAllByTestId("list-item").length).toBe(1);
});


it("Field edit input, press edit button , add new todo" , () => {
  act(() => {
    render(<App/>)
  })

  const editButtons = screen.queryAllByTestId("edit-button");
  act(() => {
    fireEvent.click(editButtons[0]);
  })
  expect(screen.getByTestId("editModal")).toBeInTheDocument();

  const event = { target: { value: "Edit test" } };

  act(() => {
    fireEvent.change(screen.getByTestId("editInput"), event);
  })
  const inputValue = screen.getByTestId("editInput") as HTMLInputElement;
  expect(inputValue.value).toBe("Edit test");

  act(() => {
    fireEvent.click(screen.getByTestId("editTaskButton"));
  })
  expect(screen.getByText("Edit test")).toBeInTheDocument();
})




