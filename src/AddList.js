import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addTaskToList } from './TaskSlice'
import { useDispatch } from 'react-redux'

const AddTask=()=>{

    const dispatch=useDispatch()

    const[title,setTitle]=useState("")

    const addTask=(e)=>{
        e.preventDefault();
        
        console.log(title);

        dispatch(addTaskToList({title}));
        setTitle("");
    }
    return(
        <div>
            <section className="my-4">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Product Name</Form.Label>
                    <Form.Control type="text" placeholder="EnterTask Name" 
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}/>
                    
                </Form.Group>

                
                
                <Button variant="primary" type="submit" onClick={(e)=>addTask(e)} >
                    New task
                </Button>
            </Form>
            </section>
        </div>
    )
}
export default AddTask