import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and About Us */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
           
            <p className="text-gray-500 mb-4">Welcome to GymHub</p>
            <h3 className="text-lg font-semibold text-orange-500 mb-2">About Us</h3>
            <p className="text-gray-500">We want to help bring  unique startups together.</p>
            <h3 className="text-lg font-semibold text-orange-500 mt-4 mb-2">Contact Us</h3>
            <p className="flex items-center text-gray-500 mb-2">
              <i className="fas fa-phone-alt mr-2"></i> +91 9999 999 999
            </p>
            <p className="flex items-center text-gray-500">
              <i className="fas fa-envelope mr-2"></i> youremailid.com
            </p>
          </div>

          {/* Information */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-orange-500 mb-4">Information</h3>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-500 hover:text-white">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-gray-500 hover:text-white">More Search</a></li>
              <li className="mb-2"><a href="#" className="text-gray-500 hover:text-white">Blog</a></li>
              <li className="mb-2"><a href="#" className="text-gray-500 hover:text-white">Testimonials</a></li>
              <li className="mb-2"><a href="#" className="text-gray-500 hover:text-white">Events</a></li>
            </ul>
          </div>

          {/* Helpful Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-orange-500 mb-4">Helpful Links</h3>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-500 hover:text-white">Services</a></li>
              <li className="mb-2"><a href="#" className="text-gray-500 hover:text-white">Supports</a></li>
              <li className="mb-2"><a href="#" className="text-gray-500 hover:text-white">Terms & Condition</a></li>
              <li className="mb-2"><a href="#" className="text-gray-500 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold text-orange-500 mb-4">Subscribe More Info</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full p-2 rounded-l-md text-black"
              />
              <button className="bg-orange-500 text-white p-2 rounded-r-md">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-orange-500"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-orange-500"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="text-orange-500"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-orange-500"><i className="fab fa-youtube"></i></a>
            <a href="#" className="text-orange-500"><i className="fab fa-instagram"></i></a>
          </div>
          <p className="text-gray-500 text-sm">&copy; 2018 @ company Ltd. All Right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;