import React, { useState } from 'react'
import style from "./home.module.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  let [name,setName]=useState("")
  let [salary,setSalary]=useState("")
  let [company,setCompany]=useState("")
  let navigate=useNavigate() 

  let formhandle=(e)=>{
    e.preventDefault()  
    console.log(name,salary,company); 
    let payload={name,salary,company} 
    axios.post("http://localhost:3000/user",payload)
    .then(()=>{
      console.log("Data Has Been Added");
    })
    .catch(()=>{
      console.log("Something Went Wrong");
    })
    navigate("users")
  }

  return (
    <section id={style.form}>
        <form action="#" onSubmit={formhandle}>
          <h3>New User</h3>
        <input type="text" name='name' placeholder='NAME' value={name} onChange={e=>{setName(e.target.value)}}/> <br />   
       
        <input type="number" name='sal' placeholder='SALARY' value={salary} onChange={e=>{setSalary(e.target.value)}}/> <br />
       
        <input type="text" name='cmp' placeholder='COMPANY' value={company} onChange={e=>{setCompany(e.target.value)}}/> <br /> <br />
      
       <center> <input type="submit" value="SUBMIT" id={style.btn}/> </center>
    </form>
    </section>
  )
}

export default CreateUser
