import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')

const navigate=useNavigate();

async function submit(e){
    e.preventDefault();
    try{
        await axios.post("http://localhost:5000/signup",{
        email,password
    })
    .then(res=>{
      if(res.data==="exist"){
         alert("user already registered")
      }else if(res.data==="notexist"){
        navigate("/login")
      }
    })
    .catch(e=>{
      alert("wrong details has entered")
      console.log(e)
    })
    }
    catch(error){
        console.log(error)
        

    }
}

  return (
    <div className='login'>
        <h1>Sign Up form</h1>
        <form>
      <input type='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder='email' name='' id=''/>
      <input type='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder='password' name='' id=''/>
      <input type="submit" onClick={submit}/>
      </form>
      <h3>OR</h3>
      <Link to="/Login" >Login</Link>
    </div>
  )
}

export default Signup
