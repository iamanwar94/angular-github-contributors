import React from "react";

const Spinner: React.FC = () => {
  return (
    <div className="backdrop-blur-sm flex justify-center items-center">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-black-900"></div>
    </div>
  );
};

export default Spinner;
