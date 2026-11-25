import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Buttons/Button";
import { RiDownloadLine } from "react-icons/ri";
import Brand from "../Brand/Brand";

const Navbar = () => {
  const navLinks = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/work", name: "Work" },
    { id: 3, path: "/pricing", name: "Pricing" },
    { id: 4, path: "/contact", name: "Contact" },
  ];

  return (
    <div className="px-15">
      <div className="py-5 flex justify-between items-center border-b border-b-border">
        <Brand/>
        <div className="nav-links flex gap-10 text-lg">
          {navLinks.map((navLink) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-accent" : "text-secondary"
              }
              key={navLink.id}
              to={navLink.path}
            >
              {navLink.name}
            </NavLink>
          ))}
        </div>
        <div className="button">
          <Button>
            <span>CV</span> <RiDownloadLine />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
