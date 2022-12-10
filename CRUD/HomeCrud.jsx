import React from 'react'
import { Link } from 'react-router-dom';
import style from "./home.module.css";

const HomeCrud = () => {
  return (

    <div id={style.nav}>
       <Link  to="/">CREATE-USERS</Link>
       <Link to="users">USERS</Link>
    </div>
    
    
  )
}

export default HomeCrud