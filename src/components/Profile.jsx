import React from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import UserContextProvider from "../context/UserContextProvider";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>please Login</div>;
  return <div>Welcome {user.username}</div>;
}

export default Profile;
