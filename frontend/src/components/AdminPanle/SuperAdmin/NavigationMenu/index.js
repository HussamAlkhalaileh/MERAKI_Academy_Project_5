import React from "react";
import "./style.css";
import { HiUsers } from "react-icons/hi";
import { BiGitPullRequest } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";

import { useSelector, useDispatch } from "react-redux";
import react, { useEffect, useState } from "react";
import { SuperAdmin } from "../../../../controllers/superAdmin";
import { setRequests, setUsers } from "../../../../redux/reducers/superAdmin";

export const NavigationBar = (req, res) => {
  const dispatch = useDispatch();
  const [isUsersShown, setIsUsersShown] = useState(true);
  const { superAdminPanel, auth } = useSelector((state) => {
    return state;
  });

  const userArea = ({
    name,
    imgUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/347px-Lionel_Messi_20180626.jpg",
  }) => {
    return (
      <div>
        <div id="user-img-div">
          <img src={imgUrl} />
        </div>
        <h2>{name} </h2>
      </div>
    );
  };

  const menuButton = ({ text, onClick, icon }) => {
    return (
      <div className="Nav-menu-btn">
        <button onClick={onClick}>{text}</button>
        {icon}
      </div>
    );
  };

  return (
    <div id="nav-menu-panel">
      <h3>User Information</h3>
      <hr />
      <br />
      <div>{userArea({ name: "sad" })}</div>
      <hr />
      <h3>menu</h3>
      <hr />
      {menuButton({
        text: "Users",
        icon: <HiUsers />,
        onClick: async () => {
          const data = await SuperAdmin.getAllUsers({ token: auth.token });
          dispatch(setUsers(data.users));
        },
      })}
      {menuButton({
        text: "Requests",
        icon: <BiGitPullRequest />,
        onClick: async () => {
          const data = await SuperAdmin.getAllRequests({ token: auth.token });
          dispatch(setRequests(data.requests));
        },
      })}
      {menuButton({
        text: "Create Owner",
        icon: <AiOutlineUserAdd />,
        onClick: async () => {},
      })}
    </div>
  );
};
