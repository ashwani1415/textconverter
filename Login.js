import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')

const navigate = useNavigate();
async function submit(e){
    e.preventDefault();
    try{
        await axios.post("http://localhost:5000/",{
        email,password
    })
    .then(res=>{
      if(res.data==="exist"){
          navigate('/home1')
      }else if(res.data==="notexist"){
        alert("user is not signed in")
      }
    })
    .catch(e=>{
      alert("wrong details has entered")
      console.log(e);
    })
    }
    catch(error){
        console.log(error)
        

    }
}

  return (
    <div>
        <form>
      <input type='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder='email' name='' id=''/>
      <input type='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder='password' name='' id=''/>
      <input type="submit" onClick={submit}/>
      </form>
      <h3>OR</h3>
      <Link to="/signup" >signup</Link>
    </div>
  )
}

export default Login
