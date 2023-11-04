import React from 'react';
import '../style/todo.css';

function TodoAddItem({newItem,handleSubmit ,setNewItem, } ) {
    return (
        <>
            <div className="addItem">

                <form className='addForm' onSubmit={handleSubmit}>
                    <input type="text"  value={newItem} onChange={(e)=>setNewItem(e.target.value)}/>
                    <button type='submit ' >Add Item </button>
                </form>

            </div>
        </>
    )
}
export default TodoAddItem;