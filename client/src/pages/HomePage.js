import React from "react";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-red-500">Welcome to the Home Page</h1>
      <p>This is the home page of your application.</p>
      <p>Feel free to customize it according to your needs!</p>
    </div>
  );
};

export default HomePage;
