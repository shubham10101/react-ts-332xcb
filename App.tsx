import * as React from 'react';
import './style.css';
import Todo from "./Todo"

export default function App() {
  const [count, setCount] =React.useState(0)
  const [todos, setTodo] = React.useState([]);

  const increment = () => {
    console.log("hh")
    setCount((c) => c + 1);
  };
  const addTodo = React.useCallback(() => {
    setTodo((t) => [...t, "New Todo"]);
  }, [todos]);

  
  return (
    <div>
        <Todo  todos ={todos} addTodo ={addTodo} />
        
      <div>
        count : {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}
