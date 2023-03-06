import { Link,useNavigate } from "react-router-dom";
import './SignupPage.scss'
import { useState } from "react";
import axios from 'axios';

const SignupPage = () => {
  const navigate=useNavigate()
  const [input,setInput]=useState({
    name:'',
    email:'',
    password:''
  })
  const [error,setError]=useState(null)

  const changeHandler=(e)=>{
    setInput(prev=>({...prev, [e.target.name]:e.target.value}))
  }

  const sumbitHandler=async(e)=>{
    e.preventDefault()
    try {
      await axios.post('http://localhost:8800/api/auth/signup',input)
      navigate('/')
    } catch (err) {
      setError(err.response.data)
    }
  }


  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>SignUp</h1>
          <p>hi</p>
          <p>Do you have an account?</p>
          <Link to="/login">
          <button>LogIn</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Name" name="name" onChange={changeHandler}/>
            <input type="email" placeholder="Email" name="email" onChange={changeHandler}/>
            <input type="password" placeholder="Password" name='password' onChange={changeHandler}/>
            {error && error}
            <button onClick={sumbitHandler}>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignupPage