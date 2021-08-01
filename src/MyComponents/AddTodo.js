import React from 'react'
import { useState } from 'react';

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit=(e)=>{
        e.preventDefault();
        if(!title|| !desc){
            alert("Title Or Description cannot be blank");
        }
        else{
            addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container bg-secondary bg-gradient border  border-3 border-dark p-3 my-3">
            <h2>Add a Todo</h2>
            <form onSubmit={submit}>
                <div className="mb-3 h4">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3 h4">
                        <label htmlFor="desc" className="form-label">Todo Description</label>
                        <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
                    </div>
                        
                <button type="submit" className="btn btn-ln btn btn-dark  ">Add Todo</button>
            </form>
        </div>
                    )
}
