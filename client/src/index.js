import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/tailwind.css"; // Adjust the path according to your project structure
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  return (
    <div>
      <a className="px-4 py-3xl" href="/register">
        Register
      </a>
      <a href="/login">Login</a>
    </div>
  );
};

export default Navbar;

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer /> {/* Include ToastContainer here */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
