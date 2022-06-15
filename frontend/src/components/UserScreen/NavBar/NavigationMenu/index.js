import React from "react";
import "./style.css";
import { HiUsers } from "react-icons/hi";
import { BiGitPullRequest, BiLogOut } from "react-icons/bi";
import { MdFastfood } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { SuperAdmin } from "../../../../controllers/superAdmin";
import { setRequests, setUsers } from "../../../../redux/reducers/superAdmin";
import { AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { IoMdLogIn } from "react-icons/io";
import { VscFeedback } from "react-icons/vsc";
import { BiDetail } from "react-icons/bi";

//FcFeedback
export const MainNavigationMenu = ({ setShowMenu }) => {
  const dispatch = useDispatch();
  const { superAdminPanel, auth } = useSelector((state) => {
    return state;
  });

  const logoArea = () => {
    return (
      <div id="main-nav-bar-logo-div">
        <img src="https://img.freepik.com/free-vector/restaurant-logo-design-template_79169-56.jpg?w=2000" />
        <p>
          KHK<span>EATS</span>
        </p>
      </div>
    );
  };

  const menuButton = ({ text, onClick, icon }) => {
    return (
      <div className="main-Nav-menu-btn">
        {icon}
        <button onClick={onClick}>{text}</button>
      </div>
    );
  };

  return (
    <div id="main-nav-menu-bar">
      <div id="inner-main-nav-menu-bar">
        <div id="main-title-nav-bar">
          <AiOutlineMenu
            onClick={() => {
              setShowMenu(false);
            }}
          />
        </div>
        {logoArea({})}
        <div id="user-management-div">
          <h4>REGISTRATION</h4>
        </div>
        {menuButton({
          text: "Sign up",
          icon: <HiUsers />,
          onClick: async () => {},
        })}
        {menuButton({
          text: "Login",
          icon: <IoMdLogIn />,
          onClick: async () => {},
        })}
        <div id="user-management-div">
          <h4>JOIN US</h4>
        </div>
        {menuButton({
          text: "Create Your Restaurant",
          icon: <MdFastfood />,
          onClick: async () => {},
        })}
        <div id="user-management-div">
          <h4>ABOUT</h4>
        </div>
        {menuButton({
          text: "Contact US",
          icon: <AiOutlineMail />,
          onClick: async () => {},
        })}
        {menuButton({
          text: "Feedback",
          icon: <VscFeedback />,
          onClick: async () => {},
        })}
        {menuButton({
          text: "About",
          icon: <BiDetail />,
          onClick: async () => {},
        })}
        {/* <button id="logout-btn">
        <div id="logout-div">
          <BiLogOut />
          <h4>LogOut</h4>
        </div>
      </button> */}
      </div>
    </div>
  );
};
