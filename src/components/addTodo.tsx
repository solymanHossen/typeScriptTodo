import {FormEvent, useState} from 'react';
import {useTodos} from "../store/todos";

const AddTodo = () => {
     const [todo,setTodo]=useState("")

    const {handleAddTodo}=useTodos()
    const  handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
         e.preventDefault();
         handleAddTodo(todo);
         setTodo("")

    }

    return (
       <form onSubmit={handleSubmit}>
           <input type='text'name='' value={todo} onChange={(e)=>setTodo(e.target.value)} />
           <button type='submit' > submit</button>
       </form>
    );
};

export default AddTodo;