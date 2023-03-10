
import * as React from 'react';

import{ memo} from "react"


const Todo =({todos,addTodo }) =>{
console.log("s")

  return ( <div> 
        {todos.map((todo ,i)=> {
          return <p key={i}> {todo} </p>
        })}
        <button onClick ={addTodo}>add Todo </button>
  </div>)
}

export default memo(Todo)