import React, { useState } from 'react'

const AddTodo = () => {
    const [title,setTitle]=useState('')
  return (
    <div>
        <input type="text"  value={title} onChange={(e)=> setTitle(e.target.value)}/>
        <button > Add</button>
      
    </div>
  )
}

export default AddTodo
