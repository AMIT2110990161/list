import React from 'react'
import TodoCard from './TodoCard'

function ToDolist(props) {
  const{todos} = props;
  
  return (
    <ul className='main'>
      {todos.map((todos, todosIdx) => {
        return (
          <TodoCard {...props} key={todosIdx} todosIdx = {todosIdx}>
            <p>{todos}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}

export default ToDolist
