import './style.css'
import React, { useState, useContext } from "react";

// import NavBar from '../NavBar';


const ScreenHome = () => {


    return (<div className="ScreenHome">
            {/* {<NavBar/>} */}
        <div className="SH_first">
            <div className="SH_first_One" ><input placeholder="Location" /> <button className='SH_FOne_Button'>let`s go</button></div>
        </div>


        <div className="SH_second">
            <div className='SH_second_One'><img className="SH_secound_imgOne" src="https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=768,format=auto,quality=50/https://cdn.doordash.com/media/consumer/home/landing/new/ev_fla_wel_alt.jpg"  /></div>
            <div className="SH_second_Tow"> <h1>Every Flavor Welcome</h1><br/><h2>Best Restaurants in New York City</h2></div>
            <img src="https://images.deliveryhero.io/image/talabat/restaurants/logo_637776727794264228.jpg?width=115&height=104"/>
            <img src="https://images.deliveryhero.io/image/talabat/Menuitems/download__T637805154353402633.jpg?width=172&amp;height=172"/>
        </div>


    </div>
    );
};

export default ScreenHome;
