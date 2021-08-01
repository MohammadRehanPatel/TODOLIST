import React from 'react'
import { TodoItem } from './TodoItem';
export const Todos = (props) => {
    let mystyle={
        minHeight : "70vh",
        // border: "2px solid black", 
        margin:"40px ,auto",
        padding:"22px"
    }
    return (
    
        <div className = "container h3 my-4" style={mystyle}>
            <h3 className= " my-3 border border-2   bg-dark text-light fs-2 text-center  border-dark bg-gradient ">Todos List</h3>
            {props.todos.length===0? "No Todos to Display":  
            props.todos.map((todo)=>{
                return(
                    
                <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> 
                
                )
            })
            }
            

        </div>
        
    )
}
