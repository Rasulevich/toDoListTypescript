import React, {useState} from 'react';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import {Todo, AddTodo, DeleteTodo, EditTodo} from './components/types';
import  './App.css';
import { Layout } from 'antd';
const { Header, Content } = Layout;

export const todoData : Array<Todo> = [
  {text: 'Drink tea', id:1},
  {text: 'Go to street',id:2},
]

const App:React.FC = () => {  
  const[todos, setTodoData] = useState(todoData)
  const[newId, setNewId] = useState(10);

  const addTodo: AddTodo = (newTodo) => {
    newTodo !==  undefined && 
      setTodoData([...todos, {text: newTodo, id:newId}])
      setNewId(newId+1);
  }
  
  const deleteTodo: DeleteTodo = (id) => {
    setTodoData(() =>todos.filter((todo) => todo.id !== id) )
  }
  
  const editTodo:EditTodo = (textA, id) => {
    const newTodo = todos.map((todo) => {
      if(todo.id === id) {
        return ({text:textA, id:id})
      }
      return todo
    });
    setTodoData(newTodo)
  }

  return (
    <div className="App" data-testid='app'>
     <div className="todoapp">
        <Layout>
          <Header className='header'><h2>To do list</h2></Header>
          <Content className='content'>
            <NewTaskForm addTodo={addTodo}/>
            <TaskList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
          </Content>
        </Layout>        
      </div>
    </div>
  );
}

export default App;
