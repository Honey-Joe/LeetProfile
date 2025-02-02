import React, { useState } from "react";

const ActivityCalendar = () => {
  const [tooltip, setTooltip] = useState(null);

  // Generate dates for the last 12 months
  const generateDates = () => {
    let dates = [];
    let currentDate = new Date();
    for (let i = 0; i < 365; i++) {
      let date = new Date();
      date.setDate(currentDate.getDate() - i);
      dates.push(date);
    }
    return dates.reverse(); // Keep in ascending order
  };

  const dates = generateDates();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <div className="p-3 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Submission Activity</h3>

      {/* Scrollable Calendar Wrapper */}
      <div className="lg:overflow-x-hidden overflow-x-auto">
        {/* Month Labels */}
        <div className="flex  space-x-14 lg:space-x-1 justify-between pb-2">
          {months.map((month, index) => (
            <span key={index} className="w-10 text-center text-gray-400 text-xs">{month}</span>
          ))}
        </div>

        {/* Calendar Grid - Horizontal Scroll */}
        <div className="flex space-x-2 justify-between min-w-max">
          {months.map((month, monthIndex) => (
            <div key={monthIndex} className="flex flex-col items-center">
              <div className="grid grid-cols-5 gap-1">
                {dates
                  .filter((date) => date.getMonth() === monthIndex)
                  .map((date, index) => (
                    <div
                      key={index}
                      className="w-2 h-2  bg-gray-400 hover:bg-green-500 cursor-pointer relative"
                      onMouseEnter={() => setTooltip(date.toDateString())}
                      onMouseLeave={() => setTooltip(null)}
                    >
                      {tooltip === date.toDateString() && (
                        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-black text-xs text-white px-2 py-1 rounded-lg shadow-lg">
                          {tooltip}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityCalendar;
