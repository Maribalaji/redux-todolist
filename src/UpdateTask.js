import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { updateTaskList } from './TaskSlice';

function MyVerticallyCenteredModal(props) {

  const {selectedTask}=useSelector((state)=>state.tasks)

  const [title,setTitle]= useState("")

    const[id,setId]=useState(0)
    const dispatch=useDispatch()
    const updateTask=()=>{
        props.onHide()
        dispatch(updateTaskList({id,title}))
    }
    useEffect(()=>{
      if(Object.keys(selectedTask).length !==0){
        setTitle(selectedTask.title)
        setId(selectedTask.id)
      }
        
    },[selectedTask])
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Product Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product Name" 
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}/>
                    
                </Form.Group>
                
                
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button variant="primary" type="submit" onClick={(e)=>updateTask(e)} >
                    Update task
                </Button>
        </Modal.Footer>
      </Modal>
    );
  }
  export default MyVerticallyCenteredModal;