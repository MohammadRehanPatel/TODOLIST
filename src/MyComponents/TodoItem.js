import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <>
        <div>
        <div className=" border border-3 border-dark mx-4 p-2 h5 bg-dark bg-gradient text-light">
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn  btn-outline-light mx-3 " onClick={()=>onDelete(todo)}>Delete</button>
        </div>
        </div>
        
        </>
    )
}
