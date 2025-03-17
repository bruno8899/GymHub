import React from "react"; 

const GymInfo = ({ image, title, text }) => {
  return (
    <div className="flex justify-center items-center gap-4 p-4 bg-gray-100 shadow-md rounded-lg w-[900px]">
      <img src={image} alt={title} className="w-[480px] object-cover rounded-md" />
      <div className="flex flex-col">
        <h1 className="text-lg font-bold text-gray-800">{title}</h1>
        <p className="text-gray-600 text-sm">{text}</p>
      </div>
    </div>
  );
};

export default GymInfo;
