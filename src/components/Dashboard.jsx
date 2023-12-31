import React,{useContext}from "react";
import Card from "./Card";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../utils/UserContextComponent';
import { DashboardContext } from '../utils/DashboardContextComponent';
function Dashboard() {
    let {user,setUser} = useContext(UserContext)
    let {data} = useContext(DashboardContext)

  let handleDelete = (id)=>{
    let index=0;
    for(let i=0;i<user.length;i++){
      if(user[i].id==id){
        index=i;
        break;
      }
    }
    let newArray = [...user]
    newArray.splice(index,1)
    setUser(newArray)
  }
  let navigate = useNavigate();
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          </div>
          <div className="row">
            {data.map((e, i) => {
              return <Card cardData={e} key={i} />;
            })}
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>E-mail</th>
                  <th>Mobile</th>
                  <th>Batch</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {user.map((e, i) => {
                  return (
                    <tr key={e.id}>
                      <td>{i+1}</td>
                      <td>{e.name}</td>
                      <td>{e.email}</td>
                      <td>{e.mobile}</td>
                      <td>{e.batch}</td>
                      <td>
                        <Button variant="primary" onClick={()=>{navigate(`/edit-user/${e.id}`)}}>Edit</Button>
                        &nbsp;
                        <Button variant="danger" onClick={()=>handleDelete(e.id)}>Delete</Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
