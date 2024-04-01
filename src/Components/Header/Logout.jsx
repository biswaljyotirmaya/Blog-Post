import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../Store/AuthSlice";
import authService from "../../appwrite/auth";

function Logout() {
  const dispaatch = useDispatch();
  const logoutHandler = () => {
    authService.logOut().then(() => {
      dispaatch(logout);
    });
  };

  return (
    <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
      Logout
    </button>
  );
}

export default Logout;
