export type Todo = {
    text:string,
    id:number
  };

export type AddTodo = (newTodo: string) => void;

export type DeleteTodo = (id: number) => void;

export type EditTodo = (  text:string,
    id:number) => void