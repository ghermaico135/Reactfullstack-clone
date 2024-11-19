import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [username , setUserName] = useState("")
    const [password , setPassword] = useState("")
    const Navigate = useNavigate()

    const Login = () =>{
        const data ={username,password}
        axios.post("http://localhost:3001/auth/login",data).then((resp) =>{
            Navigate("/")
            console.log("Logged in")
        })
    }
  return (
    <div>
        <input type="text"  onChange={(event)=>{setUserName(event.target.value)}}/>
        <input type="password" required  onChange={(event)=>{setPassword(event.target.value)}}/>
        <button type="submit" onClick={Login}>LogIn</button>
    </div>
  )
}

export default Login