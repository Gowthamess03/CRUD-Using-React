import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'

const Users = () => {

  let [data,setData]=useState([])   //We can apply map to array 

  useEffect(()=>{ //It take two parameter 1 is for callback funtion and 2nd is dependency
  axios.get("http://localhost:3000/user")   //To get the data
  .then((response)=>{
    console.log(response.data);
    setData(response.data);   
  })
  .catch((error)=>{
    console.log(error);
  })
},[]) //If we use empty dependency it will refresh once
 
let deletedata=(id)=>{
  axios.delete(`http://localhost:3000/user/${id}`)
  window.location.assign("/users")      //It is used to refresh the given path's component.
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
//Higher order data-Function which accepts another order function data
//Ln.no.34 Using backticks we can concat.To merge two value $ is used.
export default Users