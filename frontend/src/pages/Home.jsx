import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/bg.mp4";
import card_logo from "../assets/card_logo.jpg";
import cardio from "../assets/cardio.jpg";
import jumba from "../assets/jumba.jpg";
import weightlift from "../assets/weightlift.jpg";
import Banner from "../components/banner";
import Gym_info from "../components/gym_info";
import MembershipCard from "../components/membership_card";

const Home = () => {
  // Check if the user is logged in (access_token in localStorage)
  const isLoggedIn = localStorage.getItem("access_token");

  return (
    <>
      <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-24 py-16 gap-12">
        <div className="absolute inset-0 w-full h-full">
          <video
            src={bg}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative text-center md:text-left max-w-xl text-white z-10">
          <h1 className="text-5xl font-extrabold leading-tight">
            Welcome to <span className="text-red-500">Our Gym</span>
          </h1>
          <h2 className="text-2xl font-semibold mt-3">
            Unleash Your Fitness Potential
          </h2>
          <p className="text-lg mt-4 opacity-90">
            Experience the perfect blend of expert guidance and cutting-edge
            equipment to achieve your fitness goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-6 justify-center md:justify-start">
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition">
              Get Started
            </button>

            {/* Only show Join Now button if user is not logged in */}
            {!isLoggedIn && (
              <Link to="/Login_Signup">
                <button className="border border-grey-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 hover:border-none hover:text-white transition">
                  Join Now
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div>
        <Banner />
        <div className="flex flex-col gap-6 p-6 items-center justify-center min-h-screen bg-black">
          <Gym_info
            image={cardio}
            title="Cardio Equipment"
            text="Our gym features the latest cardio machines including treadmills, ellipticals, and stationary bikes, ensuring an efficetive workout every time."
          />
          <Gym_info
            image={weightlift}
            title="Weight Lifting Equipment"
            text="Our gym features the latest cardio machines including treadmills, ellipticals, and stationary bikes, ensuring an efficetive workout every time."
          />
          <Gym_info
            image={jumba}
            title="Zumba section"
            text="Our gym features the latest cardio machines including treadmills, ellipticals, and stationary bikes, ensuring an efficetive workout every time."
          />
        </div>
      </div>

      <div className="h-screen bg-black flex flex-col justify-center items-center">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Choose Your Plan</h1>
          <p className="text-lg font-bold text-white">
            Find the perfect membership that suits your lifestyle and fitness
            goals.
          </p>
        </div>

        <div className="flex space-x-6">
          <MembershipCard
            img={card_logo}
            membership_plan="Basic Membership"
            price="$2.999"
            description="Access to all gym facilities, Unlimited group classes, and Free fitness assessment"
          />

          <MembershipCard
            img={card_logo}
            membership_plan="Premium Membership"
            price="$4.999"
            description="All basic Membership benefits Personalized training plan, Access to exclusive workshops"
          />

          <MembershipCard
            img={card_logo}
            membership_plan="Family Membership"
            price="$7.999"
            description="All basic Membership benefits Up to 4 family members, Discount on additional services"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
