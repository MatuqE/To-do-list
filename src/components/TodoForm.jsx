import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {

    const [userInput, setUserInput] = useState('')

    const handleOnChange = (e) =>{
        setUserInput(e.currentTarget.value)
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(userInput.trim() !== ''){
            addTodo(userInput)
            setUserInput('')
        }
    }

  return (
    <div style={{margin:20}}>
        <form onSubmit={handleSubmit}>
            <input type="text" value={userInput} onChange={handleOnChange} placeholder='Hacer la tarea'/>
        </form>
    </div>
  )
}

export default TodoForm