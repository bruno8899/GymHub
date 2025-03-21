import React from "react";
import { useNavigate } from "react-router-dom";
import landing from "../assets/landing.jpg";

const Card = () => {
  const navigate = useNavigate();

  return (
    <div className="relative p-12 rounded w-full h-[380px] bg-black">
      <img src={landing} alt="Fitness" className="w-full h-full object-cover rounded" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
        <h1 className="text-2xl font-bold text-white mb-2">Welcome to Your Fitness Journey</h1>
        <p className="text-white mb-4">
          Discover a world of fitness tailored just for you, where our state-of-the-art facilities and expert trainers help you achieve your health goals.
        </p>
        
        <button
          className="h-[36px] w-[120px] text-white bg-red-600 font-semibold rounded"
          onClick={() => navigate("/HireTrainers")}
        >
          Hire Now
        </button>
      </div>
    </div>
  );
};

export default Card;
