import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import UseFirebase from "../../hooks/UseFirebase";

const Login = () => {
  const { signInUsingGoogle } = UseAuth();
   const location = useLocation()
   const history = useNavigate()
   
   const redirect = location.state?.form || '/home'
  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        console.log(result.user);
         history(redirect)
      });
    }

  return (
    <div className="container">
      <br />
       <h2 className="btn-style">Login</h2>
      <form>
        <div className="mb-3 w-25 mx-auto">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3 w-25 mx-auto">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="btn-style">
          <button type="submit" className="btn btn-primary w-25 mx-auto">
            Submit
          </button>
        </div>
      </form>
      <br />
      <p className="btn-style">
        new to ema-john website <Link to="/register">  Create Account</Link>
      </p>
      <div className="btn-style">-----------------------------</div>
      <div className="btn-style">
        <button
          onClick={handleGoogleLogin}
          type="submit"
          className="btn btn-primary  mx-auto"
        >
          Sign with google
        </button>
      </div>
    </div>
  );
};

export default Login;
