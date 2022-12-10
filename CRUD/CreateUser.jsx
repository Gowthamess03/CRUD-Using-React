import React, { useState } from 'react'
import style from "./home.module.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  let [name,setName]=useState("")
  let [salary,setSalary]=useState("")
  let [company,setCompany]=useState("")
  let navigate=useNavigate() /*useNavigate hook-It is used to redirect to the path we give it in parameter */

  let formhandle=(e)=>{
    e.preventDefault()  //To prevent the auto refresh
    console.log(name,salary,company); //To print the user's data in console
    let payload={name,salary,company} //To store the user's data
    axios.post("http://localhost:3000/user",payload)/*axios.post(particular API)-here we are giving the data.In the second argument we pass the user's data*/
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
/* e.target.value is control form */
/*To print the user entered data in console for that we need to use onsubmit(Use inside form) or onclick(Use inside )*/

export default CreateUser