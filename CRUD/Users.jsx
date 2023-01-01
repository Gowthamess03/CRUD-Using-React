import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'

const Users = () => {

  let [data,setData]=useState([])   

  useEffect(()=>{ 
  axios.get("http://localhost:3000/user")   
  .then((response)=>{
    console.log(response.data);
    setData(response.data);   
  })
  .catch((error)=>{
    console.log(error);
  })
},[]) 
 
let deletedata=(id)=>{
  axios.delete(`http://localhost:3000/user/${id}`)
  window.location.assign("/users")      
}

return (
    <div id={style.main}>
      {data.map((x)=>{
        return(
      <div id={style.users}>
        <div id={style.img}></div> <br /> <br />
        <p>NAME</p>
        <h3>{x.name}</h3>
        <p>SALARY</p>
        <h3>{x.salary}</h3>
        <p>COMPANY</p>
        <h3>{x.company}</h3>
        <Link id={style.edi} to={`/edituser/${x.id}`}>Edit</Link> 
        <button className='del' onClick={()=>{deletedata(`${x.id}`)}}>Delete</button>
      </div>
        )
        })}  
    </div>
  )
}

export default Users
