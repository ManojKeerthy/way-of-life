import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/connection">Connection Habits</Link>
      <Link to="/finance">Financial Habits</Link>
      <Link to="/healthy">Healthy Habits</Link>
      <Link to="/mindset">Mindset Habits</Link>
      <Link to="/productivity">Productivity Habits</Link>
    </nav>
  );
};

export default NavBar;
