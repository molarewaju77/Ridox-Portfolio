import React from "react";
import { NavLink } from "react-router-dom";
import RidoxLogo from "../assets/RidoxLogo.svg";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" },
  ];

  return (
    <div className="fixed top-0 right-0 left-0 ">
      <nav className="flex items-center justify-between md:px-[121px] px-[20px] h-[80px] shadow-sm">
        {/* Logo */}
        <img src={RidoxLogo} alt="Ridox Logo" />

        {/* Navigation Links */}
        <div className="flex gap-[20px]">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path} // use the defined path
              className={({ isActive }) =>
                isActive ? "text-[#000000]" : "text-[#8B8A8A]"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
