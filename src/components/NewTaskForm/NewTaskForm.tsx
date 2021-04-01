import React from 'react';
import { Input, Form, Button } from 'antd';
import {AddTodo} from '../types';
import 'antd/dist/antd.css';
import './NewTaskForm.css';

interface NewtaskFormProps {
    addTodo:AddTodo;
}

const NewTaskForm:React.FC<NewtaskFormProps> = ({addTodo}) => {

    const [form] = Form.useForm();

    const handleSubmit = () => {
        addTodo(form.getFieldValue('name'));
        form.resetFields()
    }
    
    const layout = {
        labelCol: { span: 18 },
        wrapperCol: { offset: 5, span: 13 },
      };

    return (
            <Form className="todo-form"
                  form={form}
                  onFinish={handleSubmit}
                  data-testid='form'
                  {...layout}>
                    <Form.Item
                        name={'name'} >
                        <Input placeholder="What needs to done?" data-testid='input' autoFocus/>
                    </Form.Item>  
                    <Form.Item >
                        <Button type="primary" htmlType="submit"
                                onClick={handleSubmit} data-testid='addTodoButton' >
                                Add Task
                        </Button>
                    </Form.Item>             
             </Form>        
    )
}

export default NewTaskForm;