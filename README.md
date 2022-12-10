# CRUD-Using-React
A Mini Project on CRUD Operation with React...


App.jsx

import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import HomeCrud from "path";
import Users from ".path";
import CreateUser from "./Component/CRUD/CreateUser";
import EditUsers from "./Component/CRUD/EditUsers";

const App=()=>{
 return(
        <div>
            <BrowserRouter>
            <HomeCrud/>
             <Routes>
                 <Route path='/' element={<CreateUser/>}/>
                 <Route path='/users' element={<Users/>}/>
                <Route path='/edituser/:index' element={<EditUsers/>}/>
             </Routes>
             </BrowserRouter>            
              </div>
     )
   
 }
 
 
 export default App
