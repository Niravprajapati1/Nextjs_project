import React, { useState } from 'react'
import {List, ListItem, ListItemText, Button, Modal, Box, Input} from '@mui/material';
import db from './firebase'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Todo(props) {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(props.todo.todo);

const updateTodo = () =>{
  db.collection('todos').doc(props.todo.id).set({
    todo: edit
  }, {merge: true})

  setOpen(false);
}
  return (
    <>
  <Modal open={open} onClose={e=>setOpen(false)}>
    <Box sx={style}>
      <h3>Edit your todo</h3>
      <Input placeholder={props.todo.todo} value={edit} onChange={e => setEdit(e.target.value)} />
      <Button disabled={!edit} onClick={updateTodo}>Update</Button>
    </Box>
  </Modal>
    <List>
      <ListItem>
      <ListItemText primary={props.todo.todo} />
    </ListItem>
     <Button variant="outlined" color="primary" onClick={e => setOpen(true)}>Edit</Button>
<Button variant="outlined" color="error" onClick={(e)=> db.collection('todos').doc(props.todo.id).delete()}>Remove</Button>
      </List>
    </>
  )
}

export default Todo;
