import React, {useState} from 'react';
import Task from '../Task/Task';
import ModalEdit from '../ModalEdit/ModalEdit';
import {Todo, DeleteTodo,EditTodo} from '../types';
import { List } from 'antd';
import 'antd/dist/antd.css';

interface TaskListProps {
    todos: Array<Todo>;
    deleteTodo:DeleteTodo;
    editTodo:EditTodo;
}

const TaskList:React.FC<TaskListProps> = ({todos,deleteTodo, editTodo}) => {
    const [todo,setEditTodo] = useState<Todo | null>(null);


    return (
        <List data-testid='task-list'>
            {todo && <ModalEdit todo={todo} editTodo={editTodo} setEditTodo={setEditTodo} data-testid='edit-modal'/>}     
            {todos.map(todo => {
                return <Task todo={todo} deleteTodo={deleteTodo} setEditTodo={setEditTodo}  key={todo.text}/>
            })}
        </List>
         
    )
}

export default TaskList;