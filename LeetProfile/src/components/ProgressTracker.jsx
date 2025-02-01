import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressTracker = () => {
  const totalProblems = 3437;
  const solvedProblems = 0;

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full max-w-md grid grid-cols-1 md:grid-cols-2">
      {/* Circular Progress Bar */}
      <div className="flex items-center justify-center flex-col">
        <div className="w-32 h-32 relative">
          <CircularProgressbar
            value={(solvedProblems / totalProblems) * 100}
            text={`${solvedProblems}/${totalProblems}`}
            styles={buildStyles({
              textColor: "#fff",
              pathColor: "#facc15",
              trailColor: "#2d2d2d",
              strokeLinecap: "round",
              textSize: "12px",
            })}
          />
          <p className="absolute text-sm text-gray-300 w-full text-center bottom-2">Solved</p>
        </div>
      <p className="text-center text-gray-400 mt-2">0 Attempting</p>
      </div>

      {/* Status Text */}

      {/* Difficulty Breakdown */}
      <div className="mt-4 flex flex-col space-y-2">
        <div className="flex justify-between bg-gray-800 p-2 rounded-md">
          <span className="text-green-400">Easy</span>
          <span>0/854</span>
        </div>
        <div className="flex justify-between bg-gray-800 p-2 rounded-md">
          <span className="text-yellow-400">Med.</span>
          <span>0/1790</span>
        </div>
        <div className="flex justify-between bg-gray-800 p-2 rounded-md">
          <span className="text-red-400">Hard</span>
          <span>0/793</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
