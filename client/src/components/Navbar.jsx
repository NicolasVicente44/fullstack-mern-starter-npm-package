import React from "react";
import "../styles/tailwind.css";

const Navbar = () => {
  return (
    <div>
      <a className="px-4 py-3 text-red-500" href="/register">
        Register
      </a>
      <a href="/login">Login</a>
    </div>
  );
};

export default Navbar;
