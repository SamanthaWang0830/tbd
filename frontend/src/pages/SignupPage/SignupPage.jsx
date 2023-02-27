import { Link } from "react-router-dom";
import './SignupPage.scss'

const SignupPage = () => {
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
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignupPage