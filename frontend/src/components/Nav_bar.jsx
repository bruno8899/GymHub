import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Nav_bar = () => {
  const navigate = useNavigate();

  // Check if the user is logged in (access_token in localStorage)
  const isLoggedIn = localStorage.getItem("access_token");

  const handleLogout = () => {
    // Clear the token from localStorage to log the user out
    localStorage.removeItem("access_token");
    navigate("/login"); // Navigate to login page after logout
  };

  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-black/40 backdrop-blur-md z-50">
      <div className="flex items-center pl-32 gap-3">
        <img src={logo} alt={logo} className="w-18 h-12" />
        <h1 className="text-white font-semibold text-xl">GymHub</h1>
      </div>
      <div>
        <ul className="flex gap-12 pr-32">
          {/* Always visible links */}
          <Link to="/">
            <li className="text-white font-semibold">Home</li>
          </Link>

          <Link to="Contact">
            <li className="text-white font-semibold">Contact</li>
          </Link>

          <Link to="About">
            <li className="text-white font-semibold">About</li>
          </Link>

          {/* Show additional links only if the user is logged in */}
          {isLoggedIn && (
            <>
              <Link to="Classess">
                <li className="text-white font-semibold">Classess</li>
              </Link>

              <Link to="HireTrainers">
                <li className="text-white font-semibold">HireTrainers</li>
              </Link>
            </>
          )}

          {/* If the user is logged in, show the Logout button; otherwise, show Join Now */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 rounded hover:bg-red-700 text-white h-[32px] w-[80px]"
            >
              Logout
            </button>
          ) : (
            <Link to="/Login_Signup">
              <button className="bg-red-600 rounded hover:bg-red-700 text-white h-[32px] w-[80px]">
                Join Now
              </button>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Nav_bar;
