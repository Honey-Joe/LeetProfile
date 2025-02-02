import React from "react";
import ActivityCalendar from "./ActivityCalender";
import ProgressTracker from "./ProgressTracker";
import BadgesCard from "./BadgesCard";
import NavTabs from "./RecentActivityTab";

const Profile = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col gap-5">
            <div className="flex flex-col items-center">
              <img
                src="https://ik.imagekit.io/HoneyJoe/Portfolio/images/user-3.jpg?updatedAt=1721571545998"
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-gray-600"
              />
              <h2 className="mt-4 text-xl font-bold">Honey Joe</h2>
              <p className="text-gray-400 text-sm">LjeGuwRR9m</p>
              <p className="mt-2 text-green-400 font-semibold">
                Rank ~5,000,000
              </p>
              <button className="mt-4 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg">
                Edit Profile
              </button>
            </div>
            <hr />
            <div className="">
              <h3 className="text-lg font-semibold">Community Stats</h3>
              <ul className="mt-2 space-y-2 text-gray-400">
                <li>👁 Views: 0</li>
                <li>✔ Solutions: 0</li>
                <li>💬 Discuss: 0</li>
                <li>⭐ Reputation: 0</li>
              </ul>
            </div>
            <hr />
            <div className="flex flex-col gap-2">
              <h3>Languages</h3>
              <div>
                <p>Not enough data</p>
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-2">
              <h3>Skills</h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <div>
                    Advanced
                    <p className="text-center">Not enough data</p>
                  </div>
                </li>
                <li className="">
                  Intermediate
                  <p className="text-center">Not enough data</p>
                </li>
                <li>
                  Beginner
                  <p className="text-center">Not enough data</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Dashboard */}
          <div className="md:col-span-3 space-y-6">
            {/* Solved Problems */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <ProgressTracker />
              <BadgesCard />
            </div>
            {/* Submission Activity */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <ActivityCalendar />
            </div>

            {/* Recent Activity */}
            {/* <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">Recent Activity</h3>
              <div className="flex space-x-4 mt-4 flex-wrap">
                <button className="bg-gray-700 px-4 py-2 rounded-lg">
                  Recent AC
                </button>
                <button className="bg-gray-700 px-4 py-2 rounded-lg">
                  List
                </button>
                <button className="bg-gray-700 px-4 py-2 rounded-lg">
                  Solutions
                </button>
                <button className="bg-gray-700 px-4 py-2 rounded-lg">
                  Discuss
                </button>
              </div>
            </div> */}
            <NavTabs></NavTabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
