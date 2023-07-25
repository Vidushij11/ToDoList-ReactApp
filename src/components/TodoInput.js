import React, { useState } from 'react'


function TodoInput(props) {

    const [inputText, setInputText] = useState("");

    const handleChange = (event) => {
        if(event.keyCode === 13){
            props.addList(inputText)
            setInputText("")
        }
        setInputText(event.target.value);
    }
  return (
    <div className='input-container'>
        <input type='text' className='input-box-todo' placeholder='Enter your todo' onChange={handleChange} value={inputText} onKeyDown={handleChange}></input>
        <button className='add-button' onClick={()=>{
            props.addList(inputText)
            setInputText("")
        }}
        >+</button>
        
        
    </div>
  )
}

export default TodoInput;

