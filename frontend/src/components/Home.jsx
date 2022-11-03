import React from 'react'
import { useNavigate} from "react-router-dom";
import './style.css'
export const Home = () => {
  const nav = useNavigate()

  const handelclk=()=>{
    nav("/admin")
  }
  const handelclick=()=>{
    nav("/user")
  }
  return (
    <div className='main'>
        <button className='btn' onClick={handelclk}>Admin</button>
        <button className='btn' onClick={handelclick}>User</button>
    </div>
  )
}
