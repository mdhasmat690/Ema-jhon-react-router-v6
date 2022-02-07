import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="container">
      <form>
        <div className="mb-3 w-25 mx-auto">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {/*  <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div> */}
        </div>
        <div className="mb-3 w-25 mx-auto">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 w-25 mx-auto">
          <label for="exampleInputPassword1" className="form-label">
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
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
