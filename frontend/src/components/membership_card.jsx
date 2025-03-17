import React from 'react';

const MembershipCard = ({ img, membership_plan, price, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs mx-auto transform hover:scale-105 transition-all duration-300 h-[400px]">
  <div className="flex justify-center items-center h-32">
    <img src={img} alt="Membership Plan" className="h-[80px] w-[80px] object-cover" />
  </div>
  <div className="p-6">
    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{membership_plan}</h3>
    <p className="text-xl font-bold text-red-600 mb-4">{price}</p>
    <p className="text-gray-600 mb-4">{description}</p>
    <button className="w-full py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300">
      SELECT
    </button>
  </div>
</div>

  );
}

export default MembershipCard;
