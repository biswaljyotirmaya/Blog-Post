import React, { useEffect, useState } from "react";
import { Header, Footer } from "./Components";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./Store/AuthSlice";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  });

  return loading ? null : (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block ">
        <Header />
        <main>{/* <Outlet /> */}Outlet</main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
