import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // To redirect after login
import login_bg from "../assets/signup_bg.jpeg";

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        // Registration Request
        const response = await axios.post(
          "http://localhost:8000/api/accounts/register/",
          {
            username: formData.name,
            email: formData.email,
            password: formData.password,
          }
        );
        console.log("Registration Response:", response.data);
        alert("Registration successful! Please log in.");
        setIsSignup(false);
      } else {
        // Login Request (email is used as username)
        const response = await axios.post(
          "http://localhost:8000/api/accounts/login/",
          {
            email: formData.email,  // Pass email for login
            password: formData.password,
          }
        );
  
        console.log("Login Response:", response.data);
  
        // Handle successful login
        if (response.data.access_token) {
          localStorage.setItem("access_token", response.data.access_token);
          alert("Login successful!");
          navigate("/");  // Redirect to home page after login
        } else {
          throw new Error("Login failed. No access token received.");
        }
      }
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error);
      setError(
        error.response?.data?.error || "Login failed. Please check your credentials."
      );
    }
  };
  

  
  
  

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="absolute inset-0">
        <img
          src={login_bg}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative bg-black/70 border border-gray-300 backdrop-blur-lg p-8 rounded-lg shadow-lg w-full max-w-md z-10">
        <h1 className="text-2xl font-semibold text-center text-white mb-4">
          {isSignup ? "Sign Up" : "Login"}
        </h1>
        <p className="text-gray-200 text-center mb-6">
          {isSignup
            ? "Join us and take the first step towards a healthier lifestyle."
            : "Welcome back! Log in to continue your journey."}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {isSignup && (
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded bg-black/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded bg-black/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded bg-black/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          {isSignup && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded bg-black/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          )}
          <button
            type="submit"
            className="bg-red-600 text-white p-2 rounded hover:bg-red-700 transition"
          >
            {isSignup ? "Start My Journey" : "Login"}
          </button>
        </form>

        {error && <p className="text-red-500 text-center mt-2">{error}</p>}

        <p className="text-center text-gray-200 mt-4">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-red-500 hover:underline focus:outline-none"
          >
            {isSignup ? "Login" : "Sign up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
