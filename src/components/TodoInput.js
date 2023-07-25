import React, { useState } from 'react'


function TodoInput(props) {

    const [inputText, setInputText] = useState("");

    const handleChange = (event) => {
        setInputText(event.target.value);
    }
  return (
    <div className='input-container'>
        <input type='text' className='input-box-todo' placeholder='Enter your todo' onChange={handleChange} value={inputText}></input>
        <button className='add-button' onClick={()=>{
            props.addList(inputText)
            setInputText("")
        }}>+</button>
        
        
    </div>
  )
}

export default TodoInput;

