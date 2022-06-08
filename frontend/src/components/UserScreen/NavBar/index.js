import './style.css'

import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return ( <div className="NavBar">

        <div className="NavBar_One" > <h1>Aklat</h1>
        </div>

        <div className='NavBar_Tow'> <h1 onClick={
          () => {
            navigate("/AllRestarnts")
          }

        }>AllRestarnts</h1>

          <h1>Accounts</h1></div>





      </div>

  );
};

export default NavBar;