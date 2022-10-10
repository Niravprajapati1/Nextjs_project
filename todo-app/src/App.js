import React, {useState} from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['read a book','Go for a walk']); 
  const [input, setInput] = useState('');
  
  const addTodo = (e) => {
    setTodos([...todos, input])
  }

  return (

    <div className="App">
    <h1>Welcome friends</h1>
  <input value={input} onChange={e  => setInput(e.target.value)}/>
  <button onClick={addTodo}>Add todo</button>
<ul>
  {todos.map(todo=> (
<li>{todo}</li>
  ))}
</ul>
  </div>
  
  )
  }
export default App;
