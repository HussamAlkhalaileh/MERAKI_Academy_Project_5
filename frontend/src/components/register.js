import React, { useState } from "react";
import {controllers, Register} from "../controllers/register"

console.log("ThisIsRegister");
export const RegisterComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [message, setMessage] = useState("");

   const createNewUser =async () => {
      Register.register({firstName,lastName,email,password})

  };
  return (
    <div className="registerContiner">
      Create an Account
      <hr id="lineColorRegister" />
      <input
        type="text"
        placeholder="first name "
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
     <br/>
      <br/>
      
      <input
        type="text"
        placeholder="last name "
        onChange={(e) => {
          setLastname(e.target.value);
        }}
      />
       <br/>
      <br/>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br/>
      <br/>
      <input
        type="password"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br/>
      <br/>
      <button id="register" onClick={createNewUser}>
        Create your account
      </button>
      <br/>
      <br/>
      <p>Already have an account?</p> <a id="toLoginPage" >Login</a>
    </div>
  );
};

export default RegisterComponent;
