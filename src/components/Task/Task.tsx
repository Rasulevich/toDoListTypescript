import React from 'react';
import {Todo, DeleteTodo } from '../types';
import { List, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import './Task.css';

interface TaskProps {
    todo: Todo;
    deleteTodo:DeleteTodo;
    setEditTodo: (todo:Todo | null) => void
}

const Task:React.FC<TaskProps> = ({todo,deleteTodo, setEditTodo}) => {
    const deleteBtn = () => {
        deleteTodo(todo.id)
        setEditTodo(null)
    }

    return (
            <List.Item
                actions={[
                    <Button  type="ghost"  onClick={() => setEditTodo(todo)} data-testid='edit-button' icon={<EditOutlined/>}/>, 
                    <Button type="primary" danger onClick={deleteBtn} data-testid='delete-button'>
                        X
                    </Button> 
                ]}
                className="list-item" data-testid='list-item'>

                <span>{todo.text}</span>
            </List.Item>
    )
}

export default Task