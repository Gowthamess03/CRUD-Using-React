import axios from 'axios'
import React ,{useEffect, useState}from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from "./home.module.css"

const EditUsers = () => {

    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")
    let navigate=useNavigate()

    let {index}=useParams()

    useEffect(()=>{         /*To fetch a particular data we are using useEffect from react-router-dom */
      axios.get(`http://localhost:3000/user/${index}`)
      .then((response)=>{
        console.log(response.data);
        setName(response.data.name)   //setName is used to change value of data
        setSalary(response.data.salary)
        setCompany(response.data.company)
      })
    },[])

    let formhandle=()=>{
      let payload={name,salary,company}
      axios.put(`http://localhost:3000/user/${index}` ,payload)   //This payload contains updated data like name,sal,com
      .then(()=>{
        console.log("Data Has Been Updated");
      })
      navigate("/users")
    }
  return (
    <section id={style.form}>
        <form action="#" onSubmit={formhandle}>
          <h3>New User</h3>
        <input type="text" placeholder='NAME' value={name} onChange={e=>{setName(e.target.value)}}/> <br />   
       
        <input type="number" placeholder='SALARY' value={salary} onChange={e=>{setSalary(e.target.value)}}/> <br />
       
        <input type="text" placeholder='COMPANY' value={company} onChange={e=>{setCompany(e.target.value)}}/> <br /> <br /> 
      
       <center> <input type="submit" value="UPDATE" id={style.btn}/> </center>
    </form>
    </section>
  )
}

export default EditUsers