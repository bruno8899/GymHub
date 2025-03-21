import React, { useState, useEffect } from "react";
import axios from "axios";

const AboutUs = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/expert/experts/") // Replace with your actual backend URL
      .then((response) => {
        setExperts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching experts:", error);
      });
  }, []);

  return (
    <div className="bg-gray-100 font-roboto">
      {/* Hero Section */}
      <div className="relative">
        <img
          alt="Gym interior with equipment and a person working out"
          className="w-full h-auto max-h-[600px] object-cover"
          src="https://storage.googleapis.com/a1aa/image/kGP-We9EB_QX6I_S0HWVj_NFGSoat6rKq-oW7wCz4A4.jpg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-75 p-8 m-8 rounded-lg shadow-lg max-w-lg">
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-gray-1000 mb-4">
              Welcome to Gym Website! We are more than just a gym; we are a
              community of fitness enthusiasts committed to helping you reach
              your fitness goals. From state-of-the-art equipment to expert
              trainers, we provide everything you need to succeed.
            </p>
          </div>
        </div>
      </div>

      {/* Expert Team Section */}
      <div className="text-center py-16">
        <h2 className="text-3xl font-bold mb-4">Our Expert Team</h2>
        <p className="text-gray-700 mb-8">
          Meet the dedicated professionals committed to your fitness journey.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
          {experts.length > 0 ? (
            experts.map((expert) => (
              <div
                key={expert.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden p-4"
              >
                <img
                  src={`http://127.0.0.1:8000${expert.image}`}
                  alt={expert.name}
                  className="w-full h-85 object-cover "
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{expert.name}</h3>
                  <p className="text-gray-700">{expert.role}</p>
                  <p className="text-gray-500 text-sm mt-2">{expert.bio}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Loading experts...</p>
          )}
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 text-center bg-black">
        <h2 className="text-white text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-white text-gray-700 mb-8 max-w-3xl mx-auto">
          Our mission is to empower individuals to lead healthier, happier lives by providing the highest quality fitness services and fostering a welcoming environment where everyone feels motivated to achieve their best.
        </p>
      </div>

      {/* Vision Section */}
      <div className="py-16 text-center bg-black">
        <h2 className="text-3xl text-white font-bold mb-4">Our Vision</h2>
        <p className="text-white mb-8 max-w-3xl mx-auto">
          We envision a world where fitness is accessible to everyone, and people of all backgrounds can achieve their health goals in a supportive, inclusive community.
        </p>
      </div>

      {/* Values Section */}
      <div className="py-10  text-black text-center bg-white">
        <h2 className="text-3xl font-bold mb-4">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-black text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-700">
              We foster a sense of belonging where individuals support one another on their fitness journey.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-black text-xl font-semibold mb-2">Integrity</h3>
            <p className="text-gray-700">
              We operate with honesty, transparency, and respect, building trust with our members and partners.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-black text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-700">
              We strive for excellence in everything we do, from the quality of our services to the expertise of our trainers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
