import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import User from './components/User'
import Query from './components/Query'
import Class from './components/Class'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import { BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
function App() {
  let [user,setUser] = useState([
    {
      id:1,
      name:"Dinesh",
      email:"dinesh@gmail.com",
      mobile:"9874563210",
      batch:"B53"
    },
    {
      id:2,
      name:"Dinesh",
      email:"dinesh@gmail.com",
      mobile:"9874563210",
      batch:"B53"
    },
    {
      id:3,
      name:"Dinesh",
      email:"dinesh@gmail.com",
      mobile:"9874563210",
      batch:"B53"
    },
    {
      id:4,
      name:"Dinesh",
      email:"dinesh@gmail.com",
      mobile:"9874563210",
      batch:"B53"
    },
  ])
  return <div id="wrapper">
    <BrowserRouter>
    <Sidebar />
    <Routes>
      <Route path='/dashboard' element={<Dashboard user={user} setUser={setUser}/>}/>
      <Route path='/user' element={<User />}/>
      <Route path='/query' element={<Query />}/>
      <Route path='/class' element={<Class/>}/>
      <Route path='/add-user' element={<AddUser user={user} setUser={setUser}/>}/>
      <Route path='/edit-user/:id' element={<EditUser user={user} setUser={setUser}/>}/>
      <Route path='*' element={<Navigate to='/dashboard'/>}/>
    </Routes>
    </BrowserRouter>
    
    
  </div>
}

export default App