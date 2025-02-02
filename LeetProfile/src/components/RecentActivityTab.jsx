import React, { useState } from "react";

const NavTabs = () => {
  const [activeTab, setActiveTab] = useState("Recent AC");

  const tabs = ["Recent AC", "List", "Solutions", "Discuss"];

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-full ">
      {/* Title */}
      <h3 className="text-lg font-semibold text-white">Recent Activity</h3>

      {/* Tab Buttons */}
      <div className="flex gap-5  mt-4 overflow-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 text-nowrap rounded-lg transition-all duration-300 cursor-pointer ${
              activeTab === tab
                ? "bg-gray-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6 text-gray-300">
        {activeTab === "Recent AC" && <p>🟢 Displaying Recent Accepted Solutions...</p>}
        {activeTab === "List" && <p>📜 Showing your problem list...</p>}
        {activeTab === "Solutions" && <p>💡 Viewing your solutions...</p>}
        {activeTab === "Discuss" && <p>💬 Opening discussions...</p>}
      </div>
    </div>
  );
};

export default NavTabs;
