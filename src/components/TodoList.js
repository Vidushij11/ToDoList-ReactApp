import React from 'react'

function TodoList(props) {
  return (
    <li className='list-item' style={{color:"red"}}>
        {props.item}
        <span className='icons' >
        <i className="fa-solid fa-trash-can"></i>
        </span>
    </li>
  )
}

export default TodoList