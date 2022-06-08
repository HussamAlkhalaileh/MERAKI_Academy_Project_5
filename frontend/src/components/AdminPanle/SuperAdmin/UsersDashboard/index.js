import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SuperAdmin } from "../../../../controllers/superAdmin";
import { User } from "../../../../controllers/user";
import auth from "../../../../redux/reducers/auth";
import { setRequests, setUsers } from "../../../../redux/reducers/superAdmin";

export const Users = () => {
  const dispatch = useDispatch();
  const [isUsersShown, setIsUsersShown] = useState(true);
  const { superAdminPanel } = useSelector((state) => {
    return state;
  });
  useEffect(() => {
    // just for test
    (async () => {
      const requestsResponse = await SuperAdmin.getAllRequests({
        token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsInJvbGVJZCI6MSwiY2FydElkIjozLCJpYXQiOjE2NTQ0NTYzMTZ9.k_orJs2F3mmDFmCm6UVE7nK4HuzTc9tRorjl7hYQ4ew`,
      });

      dispatch(setRequests(requestsResponse.requests));
      const usersResponse = await SuperAdmin.getAllUsers({
        token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsInJvbGVJZCI6MSwiY2FydElkIjozLCJpYXQiOjE2NTQ0NTYzMTZ9.k_orJs2F3mmDFmCm6UVE7nK4HuzTc9tRorjl7hYQ4ew`,
      });

      dispatch(setUsers(usersResponse.users));
    })();
  }, []);
  const {auth} = useSelector((state)=>{
      return state;
  })

  const showUsers = (user) => {
    return (
      <div key={user.id} id="user-div">
        <h4>{user.id}</h4>
        <h4>{user.firstName + " " + user.lastName}</h4>
        <h4>{user.email}</h4>
        <h4>{user.role_id}</h4>
        <h4>{user.lastName}</h4>
        <div>
            <button onClick={async()=>{
                await SuperAdmin.deleteOwner({token:auth.token,ownerId:user.id,restaurantName:""})
            }}>Delete</button>
            <button onClick={()=>{}}>Edit</button>
        </div>
      </div>
    );
  };
  return (
    <div>
        <div style= {{textAlign:"start",height:"100px"}}>
           <p><strong>Users</strong> you can,edit or delete users </p> 
           <button>+ User</button>
        </div>
      <div key={"//d"} id="user-div">
        <h4>#</h4>
        <h4>Name</h4>
        <h4>Email</h4>
        <h4>Role</h4>
        <h4>last Login</h4>
        <h4>Actions</h4>
      </div>
      {superAdminPanel.users.map((ele) => {
        return showUsers(ele);
      })}
    </div>
  );
};
