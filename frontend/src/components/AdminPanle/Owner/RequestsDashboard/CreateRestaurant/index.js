import React, { useContext, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { Owner } from "../../../../../controllers/owner";
import { setRequests } from "../../../../../redux/reducers/superAdmin";

export const CreateRestaurant = ({}) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [Logo, setLogo] = useState("");
  const [category, setCategory] = useState("");

  const [isDialogShown, setIsDialogShown] = useState("");
  const dispatch = useDispatch();

  const { auth, superAdminPanel } = useSelector((state) => {
    return state;
  });
  const buildAlertDialog = ({ bgColor, color, text, text2 }) => {
    setTimeout(() => {
      setIsDialogShown(false);
    }, 2500);

    return (
      <div id="Alert">
        <div style={{ backgroundColor: `${bgColor}` }}>
          <p>
            <strong style={{ color: `${color}` }}>{text}</strong>
            <br />
            <small style={{ color: `${color}` }}>{text2}</small>
          </p>
        </div>
      </div>
    );
  };
  const createInput = ({ placeholder, setState, type = "text", key = "" }) => {
    return (
      <div>
        <input
          type={type}
          placeholder={placeholder}
          onChange={(e) => {
            setState(e.target.value);
          }}
          className="input"
        />
      </div>
    );
  };

  const createRestaurant = async () => {
   await Owner.createRestaurant({lat:"none",lng:"none",location,name, Logo,category,token:auth.token})
  };
  return (
    <div id="signup-form">
      {isDialogShown ? (
        buildAlertDialog({
          bgColor: "green",
          color: "white",
          text: "Request Created Successfully",
          text2: `The response will be in few hours `,
        })
      ) : (
        <></>
      )}
      <div id="signup-form-inner">
        <div id="signup--exit-button">
          <button onClick={() => {}}>X</button>
        </div>

        <h1>Create Restaurant</h1>
        <hr />

        {createInput({
          placeholder: "Logo Url",
          type: "text",
          key: "text",
          setState: setLogo,
        })}
        {createInput({
          placeholder: "Restaurant Name",
          type: "text",
          key: "text",
          setState: setName,
        })}

        {createInput({
          placeholder: "Location",
          type: "text",
          key: "text",
          setState: setLocation,
        })}
        {createInput({
          placeholder: "Category",
          type: "text",
          key: "text",
          setState: setCategory,
        })}

        <div id="signup-button-div">
          <button onClick={createRestaurant}>Create Restaurant</button>
        </div>
      </div>
    </div>
  );
};
