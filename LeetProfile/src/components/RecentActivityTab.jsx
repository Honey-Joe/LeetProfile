import React, { useState } from "react";

const NavTabs = () => {
  const [activeTab, setActiveTab] = useState("Recent AC");

  const tabs = ["Recent AC", "List", "Solutions", "Discuss"];

  return (
    <div className=" p-6 rounded-lg shadow-lg bg-white w-full max-w-full ">
      <h3 className="text-lg font-semibold ">Recent Activity</h3>
      <div className="flex gap-5  mt-4 overflow-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 text-nowrap rounded-lg transition-all duration-300 cursor-pointer ${
              activeTab === tab
                ? "bg-gray-500 text-white "
                : "bg-gray-200 "
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-6 text-black">
        {activeTab === "Recent AC" && <p>🟢 Displaying Recent Accepted Solutions...</p>}
        {activeTab === "List" && <p>📜 Showing your problem list...</p>}
        {activeTab === "Solutions" && <p>💡 Viewing your solutions...</p>}
        {activeTab === "Discuss" && <p>💬 Opening discussions...</p>}
      </div>
    </div>
  );
};

export default NavTabs;
