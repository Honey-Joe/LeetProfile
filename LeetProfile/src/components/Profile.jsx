import React from "react";
import ActivityCalendar from "./ActivityCalender";
import ProgressTracker from "./ProgressTracker";
import BadgesCard from "./BadgesCard";
import NavTabs from "./RecentActivityTab";

const Profile = () => {
  return (
    <div>
      <div className="min-h-screen  bg-gray-300 p-6">
        <div className="lg:w-[80%] w-[100%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-5">
            <div className="flex flex-col items-center">
              <img
                src="https://ik.imagekit.io/HoneyJoe/Portfolio/images/user-3.jpg?updatedAt=1721571545998"
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-gray-600"
              />
              <h2 className="mt-4 text-xl font-bold">Honey Joe</h2>
              <p className="text-black text-sm">LjeGuwRR9m</p>
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
              <ul className="mt-2 space-y-2 text-gray-600">
                <li>👁 Views: 0</li>
                <li>✔ Solutions: 0</li>
                <li>💬 Discuss: 0</li>
                <li>⭐ Reputation: 0</li>
              </ul>
            </div>
            <hr />
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">Languages</h3>
              <div>
                <p className="text-gray-800 text-center text-[12px]">Not enough data</p>
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-2 p-2">
              <h3 className="font-bold">Skills</h3>
              <ul className="flex flex-col gap-3 list-disc">
                <li>
                  <div>
                    Advanced
                    <p className="text-center text-[14px]">Not enough data</p>
                  </div>
                </li>
                <li className="">
                  Intermediate
                  <p className="text-center text-[14px]">Not enough data</p>
                </li>
                <li>
                  Beginner
                  <p className="text-center text-[14px]">Not enough data</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-3 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <ProgressTracker />
              <BadgesCard />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <ActivityCalendar />
            </div>
            <NavTabs></NavTabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
