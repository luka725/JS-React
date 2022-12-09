import { useState, useEffect } from "react";
interface Itodo {
    id: number,
    todo: string,
    completed: boolean,
    userId: number
}
const Todo = () =>{
    const [todos, setTodos] = useState<Itodo[]>([]);
    async function fetchTodos(){
        const todos  = await fetch("https://dummyjson.com/todos?limit=3&skip=10");
        const response = await todos.json();
        //console.log(response.todos);
        setTodos(response.todos);
    }
    const deleteTodo = (id:number) =>{
        setTodos(todos.filter((todo) => todo.id != id))
    }
    useEffect(() => {
      fetchTodos();
    }, [])
    return(
        <>
            {todos.map((obj, index) => (
                <div key={index}>
                <p>{obj.todo}</p>
                <button onClick={() => deleteTodo(obj.id)}>delete</button>
                </div>
            ))}
        </>
    )
}

export default Todo;