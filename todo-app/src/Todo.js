import React from 'react'
import {List, ListItem, ListItemAvatar, ListItemText} from '@mui/material';

function Todo(props) {
  return (
    <>
    <List>
      <ListItem>
      <ListItemAvatar>

        </ListItemAvatar>
        <ListItemText primary={props.todo} secondary="deadline: " />
     </ListItem>
      </List>
    </>
  )
}

export default Todo;
