import React from "react";
import "./LoadingSpinner.css"; // Import CSS for loading spinner

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-container col-span-5">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
