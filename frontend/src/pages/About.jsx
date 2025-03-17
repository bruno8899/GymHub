import React from 'react';
import Navbar from '../components/Nav_bar';
const AboutUs = () => {
  return (
    <div className="bg-gray-100 font-roboto">
      <Navbar />

      {/* Hero Section */}
      <div className="relative">
        <img
          alt="Gym interior with equipment and a person working out"
          className="w-full h-auto"
          height="400"
          src="https://storage.googleapis.com/a1aa/image/kGP-We9EB_QX6I_S0HWVj_NFGSoat6rKq-oW7wCz4A4.jpg"
          width="1920"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-75 p-8 m-8 rounded-lg shadow-lg max-w-lg">
            <h2 className="text-2xl font-bold mb-4">
              About Us
            </h2>
            <p className="text-gray-1000 mb-4">
              Welcome to Gym Website! We are more than just a gym; we are a community of fitness enthusiasts committed to helping you reach your fitness goals. From state-of-the-art equipment to expert trainers, we provide everything you need to succeed.
            </p>
          </div>
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
      <div className="py-16 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
        <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
          We envision a world where fitness is accessible to everyone, and people of all backgrounds can achieve their health goals in a supportive, inclusive community.
        </p>
      </div>

      {/* Values Section */}
      <div className="py-16 text-white text-center bg-black">
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

      {/* Expert Team Section */}
      <div className="text-center py-16">
        <h2 className="text-3xl font-bold mb-4">
          Our Expert Team
        </h2>
        <p className="text-gray-700 mb-8">
          Meet the dedicated professionals committed to your fitness journey.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              alt="Portrait of a fitness expert"
              className="w-full h-auto"
              height="400"
              src="https://i.pinimg.com/736x/b6/8b/9d/b68b9d8e8e0a936d6c4350bb0ae84f3d.jpg"
              width="350"
            />
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              alt="Portrait of a fitness expert"
              className="w-full h-auto"
              height="400"
              src="https://i.pinimg.com/736x/2a/44/a2/2a44a27fb2c92b35c25449149cf62906.jpg"
              width="350"
            />
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              alt="Portrait of a fitness expert"
              className="w-full h-auto"
              height="350"
              src="https://i.pinimg.com/736x/17/6f/42/176f42fdc55a3d5d0238fa4bf1089e50.jpg"
              width="400"
            />
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default AboutUs;