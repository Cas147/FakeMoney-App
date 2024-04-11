import React, { useState } from "react";

const DateNavigator = ({
  dates,
  currentIndex,
  setCurrentIndex,
}: {
  dates: string[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}): JSX.Element => {
  const goToPreviousDay = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNextDay = () => {
    if (currentIndex < dates.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="flex items-center space-x-4 mb-4">
      <button onClick={goToPreviousDay} disabled={currentIndex === 0}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="#fff"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <span className="text-white">{dates[currentIndex]}</span>
      <button
        onClick={goToNextDay}
        disabled={currentIndex === dates.length - 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="#fff"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default DateNavigator;
