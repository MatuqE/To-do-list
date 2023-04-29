import { useState } from "react"
import  data  from "./components/data.json"
import TodosList from "./components/TodosList"
import TodoForm from "./components/TodoForm"
import { v4 as uuidv4 } from 'uuid';



function App () {

     const [todos, setTodos] = useState(data)
     const uniqueId = uuidv4();

    const onComplete = (id) =>{
     setTodos(todos.map((todo) =>{
        return todo.id === id ? {...todo, completed: !todo.completed} : {...todo}
     }))
    }

    const onDeleteItem = (id) =>{
        setTodos( [...todos].filter(todo=> todo.id !== id))
    }

    const addTodo = (newTodo) => {
        let newItem = {id: uniqueId, task: newTodo, completed: true}
        
        setTodos([...todos, newItem])
        console.log(newItem)
    }

    return (
        <>
            <h1 className="h1">
                Lista para hacer
            </h1>

            <div className="conteiner">
                <TodoForm addTodo={addTodo}/>
                <TodosList todos= {todos} onComplete={onComplete} onDeleteItem={onDeleteItem}/>
            </div>
        </>
    )
    
}


export default App