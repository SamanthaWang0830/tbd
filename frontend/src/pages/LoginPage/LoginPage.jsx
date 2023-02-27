import React,{useContext} from 'react'
import './LoginPage.scss'
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/authContext';

const LoginPage = () => {
  const {login}= useContext(AuthContext)
  const loginHandler=()=>{
    login()
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
            <input type="text" placeholder='username' />
            <input type="password" placeholder='password'/>
            <button onClick={loginHandler}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage