import React from 'react'
import TodoItem from './TodoItem'

function TodosList ({todos, onComplete, onDeleteItem}) {

  return (
    <div>
        {
            todos.map((todo, index) => (
              <TodoItem key={index} todo={todo} onComplete={onComplete} onDeleteItem={onDeleteItem}/>
            )
          )
        }
    </div>
  )
}

export default TodosList