import React, { useState } from "react";

function Signin (){
  const user='name';
  const pw='pass';

  const[show,SetShow]=useState(false);

function ShowHandler(){
  SetShow(!show)
}

    return(
        <>
        <div className="Auth-form-container">
  <form className="Auth-form">
    <div className="Auth-form-content">
      <h3 className="Auth-form-title">Sign In</h3>
      <div className="form-group mt-3">
        <label>User Name</label>
        <input
          type="text"
          className="form-control mt-1"
          placeholder="Enter User Name"
        />
      </div>
      <div className="form-group mt-3">
        <label>Password</label>
        <input
          type={show?"text":"password"}
          className="form-control mt-1"
          placeholder="Enter password"
        /> <label onClick={ShowHandler}>Show</label>
      </div>
      <div className="d-grid gap-2 mt-3">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <p className="forgot-password text-right mt-2">
        Forgot <a href="#">password?</a>
      </p>
    </div>
  </form>
</div>

    </>

    )

}

export default Signin;
