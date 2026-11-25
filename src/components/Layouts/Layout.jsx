import React from "react";
import Navbar from "./../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "./../Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="container px-15 py-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
