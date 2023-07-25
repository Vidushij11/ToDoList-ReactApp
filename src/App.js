import { useState } from 'react';
import './App.css';

import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if(inputText!=='')
    setListTodo([...listTodo,inputText]);
  }
  return (
    <div className="main-container">
      <div className='center-container'>
          <TodoInput addList = {addList}/>
          <h1 className='app-heading'>TODO</h1>
          <hr/>
          {listTodo.map((listItem,i)=>{
            return (
              <TodoList key = {i} item = {listItem} /> 
            )
          })}
      </div>
    </div>
  );
}

export default App;
