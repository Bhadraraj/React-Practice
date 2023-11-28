import React from 'react'

const TaskList = ({ todos }) => {
    return (
        <div>
            <ul>
                {todos.map(todo => 
                    <li key={todo.id}>
                        {todo.title}
                    </li>
                )}

            </ul>
        </div>
    )
}

export default TaskList
