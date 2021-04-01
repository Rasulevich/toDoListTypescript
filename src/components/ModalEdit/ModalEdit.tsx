import React from 'react' ;
import {Todo, EditTodo} from '../types';
import { Input, Form, Button } from 'antd';
import 'antd/dist/antd.css';
import './ModalEdit.css';

interface ModalEditProps {
    todo: Todo;
    editTodo:EditTodo;
    setEditTodo:(todo:Todo | null) => void;
}

const ModalEdit:React.FC<ModalEditProps> = ({todo, editTodo, setEditTodo}) => {

    const [form] = Form.useForm();

    const handleSubmit = () => {
        const value = form.getFieldValue('name') ? form.getFieldValue('name') : todo.text;
        editTodo(value, todo.id);
        setEditTodo(null);
    }

    const layout = {
        labelCol: { span: 18 },
        wrapperCol: { offset: 5, span: 13 },
      };

    return (
        <Form className="edit-form"
            form={form}
            onFinish={handleSubmit}
            {...layout}
            data-testid='editModal'>
            <Form.Item
                name={'name'} 
                initialValue={todo.text}>
                <Input data-testid="editInput" autoFocus/>
            </Form.Item>  
            <Form.Item >
                <Button type="primary" htmlType="submit"
                        onClick={handleSubmit} data-testid="editTaskButton">
                        Edit Task
                </Button>
            </Form.Item>             
         </Form>    
    )
}

export default ModalEdit;