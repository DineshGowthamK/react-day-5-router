import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import User from './components/User'
import Query from './components/Query'
import Class from './components/Class'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import { BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
export const UserContext = React.createContext();
import UserContextComponent from './utils/UserContextComponent'
import DashboardContextComponent from './utils/DashboardContextComponent'
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
    <UserContext.Provider value = {{user,setUser}}>
    <Routes>
      <Route path='/dashboard' element={<DashboardContextComponent>
        <UserContextComponent>
          <Dashboard/>
        </UserContextComponent>
        </DashboardContextComponent>}/>
      <Route path='/class' element={<Class/>}>
        <Route path='user' element={<User />}/>
        <Route path='query' element={<Query />}/>
      </Route>
      <Route path='/add-user' element={<UserContextComponent><AddUser/></UserContextComponent>}/>
      <Route path='/edit-user/:id' element={<UserContextComponent><EditUser/></UserContextComponent>}/>
      <Route path='*' element={<Navigate to='/dashboard'/>}/>
    </Routes>
    </UserContext.Provider>
    </BrowserRouter>
    
    
  </div>
}

export default App