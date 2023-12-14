import React, { useState, useEffect } from "react";
import AddNewTodo from "./AddNewTodo";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Pay bills", id: 1 },
    { text: "Do homework", id: 2 },
    { text: "feed dog", id: 3 },
  ]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect hook ran", todos);
  }, [todos]);
  
   useEffect(() => {
     console.log("useEffect hook ran", count);
   }, [count]);

  const addTodo = (text) => {
    setTodos([...todos, { text, id: Math.random() }]);
  };
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>;
        })}
      </ul>
      <AddNewTodo addTodo={addTodo} />
      <button onClick={() => setCount(count + 1)}>Score: {count}</button>
    </div>
  );
};

export default TodoList;
