import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@mui/material';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


function App() {
  const [todos, setTodos] = useState([]); 
  const [input, setInput] = useState('');


  useEffect(()=>{
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
  setTodos(snapshot.docs.map(doc => ({id: doc.id , todo: doc.data().todo })))})
  },[]);

  const addTodo = (e) => {
    //prevent default will stop webpage from refresing
    e.preventDefault();

    //sending data to db
    db.collection('todos').add(
      {
        todo: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }
    )
    setInput('');
  }

  return (

    <div className="App">
    <h1>Welcome friends</h1>
  <form>
  <FormControl>
  <InputLabel>Write a todo</InputLabel>
  
  <Input value={input} onChange={e  => setInput(e.target.value)}/>
  
  </FormControl>
  <Button disabled={!input} onClick={addTodo} variant="contained" color="success">Add todo</Button>
 
  </form>
<ul>
  {todos.map(todo=> (
<Todo todo={todo} />

  ))}
</ul>
  </div>
  
  )
  }
export default App;
