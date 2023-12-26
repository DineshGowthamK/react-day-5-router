import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
function AddUser({user,setUser}) {
  let [name,setName] = useState("")
  let [email,setEmail] = useState("")
  let [mobile,setMobile] = useState("")
  let [batch,setBatch] = useState("")
  let navigate = useNavigate()
  const handleCreate=()=>{
    let id = user.length?user[user.length-1].id+1 : 1;
    let newArray = [...user]
    newArray.push({
      id,
      name,
      email,
      mobile,
      batch
    })
    setUser(newArray)
    navigate('/dashboard')
  }

  return <div id="content-wrapper" className="d-flex flex-column">
  <div id="content">
    <div className="container-fluid">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Add User</h1>
          </div>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>E-Mail</Form.Label>
        <Form.Control type="email" placeholder="E-Mail" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Mobile" onChange={(e)=>setMobile(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" placeholder="Batch" onChange={(e)=>setBatch(e.target.value)}/>
      </Form.Group>
      
      <Button variant="primary" onClick={()=>{handleCreate()}}>
        Submit
      </Button>
    </Form>
      </div>
      </div>
      </div>
}

export default AddUser