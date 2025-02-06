import React from "react";

const Loading = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
    </div>
  );
};

export default Loading;
