import React, { useState } from "react";
import {controllers, Login} from "../controllers/login"


export const LoginComponent = () => {
    const[email,setEmail]=useState("");
    const[password,setpassword]=useState("");
    //const[message,setmessage]=useState("");
    const LoginUser=async()=>{
        
        Login.login({email,password})
 
    };

  return (
    <div className="loginContiner">
      Login
      <hr id="lineColorLogin" />
      <input
        type="text"
        placeholder="Enter your Email : "
        onChange={(e) => {
            setEmail(e.target.value);
        }}
      />
      <br/>
      <br/>

      <input
        type="password"
        placeholder="Enter your password : "
        onChange={(e) => {
            setpassword(e.target.value);
        }}
      />
      <br/>
      <br/>

      <button id="login" onClick={LoginUser}>Login</button>
      <br/>
      <br/>
      Don't have an account?
      <a id="toRegisterPage" href="">
        Create an account
      </a>
    </div>
  );
};
export default Login;
