import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodos } from '../redux/reducer';

const mapStateToProps = (state) => {
    return {
      todos: state,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addTodo: (obj) => dispatch(addTodos(obj)),
    };
  };
  
function Todos(props) {
    const [todo, setTodo] = useState("")

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    console.log("props from store", props)
  return (
    <div className='addTodos'>
      <input 
      type="text"
      className='todo-input'
      onChange={(e) => handleChange(e) } 
      />
      <button
      className='add-btn'
      onClick={() => props.addTodo({
        id: Math.floor(Math.random()*1000),
        item:todo,
        completed: false,
      })}
      >
        Add
     </button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);

