import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
const Itemlist=(props)=>{
  const [line,setLine]=useState(false);
  const cutIt=()=>{
    setLine(true)
  }
    return(<>
      <div className='todo_Style'>
      {/* <button class="buttonx   red">
    -
  </button> */}
    <span onClick={cutIt}>
    <IconButton aria-label="delete">
    <DeleteIcon className='delete' />
      
      </IconButton>
    </span>
      <li className="listitem" style={{ textDecoration:line?"line-through":"none"}}>{props.text}</li>
      </div>
    </>);
}

export default Itemlist;