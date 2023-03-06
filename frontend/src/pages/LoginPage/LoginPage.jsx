import React,{useContext,useState} from 'react'
import './LoginPage.scss'
import { Link,useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/authContext';

const LoginPage = () => {
  const navigate=useNavigate()
  const {login}= useContext(AuthContext)

  const [input,setInput]=useState({
    email:'',
    password:''
  })
  const [error,setError]=useState(null)

  const changeHandler=(e)=>{
    setInput(prev=>({...prev, [e.target.name]:e.target.value}))
  }

  const loginHandler=async(e)=>{
    e.preventDefault()
    try {
      await login(input)
      navigate('/')
    } catch (err) {
      setError(err.response.data)
    }
    
  }
  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Hello</h1>
          <p>hi</p>
          <p>Don't have an account?</p>
          <Link to="/signup">
            <button>SignUp</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder='username' onChange={changeHandler} name="email"/>
            <input type="password" placeholder='password' onChange={changeHandler} name='password'/>
            {error && error}
            <button onClick={loginHandler}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage