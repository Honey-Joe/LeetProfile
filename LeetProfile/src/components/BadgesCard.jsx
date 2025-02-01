import React from "react";

const BadgesCard = () => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full max-w-md">
      {/* Badges Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-300">Badges</h3>
        <p className="text-2xl font-bold mt-1">0</p>
      </div>

      {/* Upcoming Badge */}
      <div className="mt-4 bg-gray-800 p-4 rounded-lg flex items-center justify-center h-16">
        <span className="text-gray-500 italic">🏅 Upcoming Badge</span>
      </div>

      {/* Locked Badge Section */}
      <div className="mt-6">
        <h4 className="text-gray-400 text-sm">Locked Badge</h4>
        <p className="text-lg font-semibold">Feb LeetCoding Challenge</p>
      </div>
    </div>
  );
};

export default BadgesCard;
