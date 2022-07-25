import React, { useState } from 'react';

export function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>We have following todos: {todos[0].text} length: {todos.length} </p>
      <button onClick={() => setTodos(...todos.text.push("Ok!"))}>
        Click me
      </button>
    </div>
  );
}
