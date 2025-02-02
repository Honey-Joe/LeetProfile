import React from "react";

const BadgesCard = () => {
  return (
    <div className="bg-white  p-6 rounded-lg shadow-lg w-full max-w-md">
      <div>
        <h3 className="text-lg font-semibold">Badges</h3>
        <p className="text-2xl font-bold mt-1">0</p>
      </div>

      <div className="mt-4 bg-gray-300 p-4 rounded-lg flex items-center justify-center h-16">
        <span className="text-gray-500 italic">🏅 Upcoming Badge</span>
      </div>

      <div className="mt-6">
        <h4 className="text-gray-400 text-sm">Locked Badge</h4>
        <p className="text-lg font-semibold">Feb LeetCoding Challenge</p>
      </div>
    </div>
  );
};

export default BadgesCard;
